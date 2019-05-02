import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { GetToiletsService } from '../../service/get-toilets.service';
import { GetRoutesService } from '../../service/get-routes.service';
import { ToiletAdapter } from '../../adapter/toilet-adapter';
import { MyPosition } from '../../model/my-position';
import { Toilet } from '../../model/toilet';
import { Route } from '../../model/route';
import { Tools } from '../../model/Tools';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  threeClosestToilets = [];
  threeRoutes = [];
  location: MyPosition;
  myIcon1 = L.icon({
    iconUrl: '../assets/icon-marker-toilet.png',
    iconSize: [48, 48],
    iconAnchor: [24, 42]
  });
  myMap: any;
  path: any;
  routeToToiletDisplayed = false;
  displayedRoute: any;
  pathSelected: any;
  selectedToilet: any;
  selectedToiletMarker: any;
  markersArray = [];
  locationDetermined: boolean = false;
  searchBarValue: string;
  geolocationNotSupported: boolean = false;
  myPositionMarker: any;
  userFollow: boolean = false;

  constructor(private getToilets: GetToiletsService, private getRoutes: GetRoutesService, private toiletAdapter: ToiletAdapter, private tools: Tools) { }

  ngOnInit() {
    this.myMap = L.map('mapId').setView([48.853, 2.35], 15);
    L.tileLayer(`${this.tools.leaflet.TILE_LAYER}`, {
    attribution: 'my map'
    }).addTo(this.myMap);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = new MyPosition();
        this.location.longitude = position.coords.longitude;
        this.location.latitude = position.coords.latitude;
        this.getRoutes.getMyMapBoxPosition(this.location).subscribe((res: any) => {
          const data2 = res;
          this.location.longitude = data2.features[0].geometry.coordinates[0];
          this.location.latitude = data2.features[0].geometry.coordinates[1];
          this.location.name = data2.features[0].place_name.split(",")[0];
          this.locationDetermined = true;
        });
        this.myMap.setView([this.location.latitude, this.location.longitude], 15);
        this.myPositionMarker = L.circleMarker([this.location.latitude, this.location.longitude], {radius: 6, stroke: true, weight: 20, color: '#00A8E8', opacity: 0.4, fill: true, fillColor: '#00A8E8', fillOpacity: 1}).addTo(this.myMap); 
      }, (error) => {
        this.location = new MyPosition();
        this.locationDetermined = true;
        this.geolocationNotSupported = true;
      });
    }
  }

  // fonction de calcul de l'itinéraire de ma position à la toilette passée en paramètre
  routeToToilet(toilet) {
    let data1;
    this.getRoutes.getToiletsMapBoxPosition(toilet).subscribe((result1) => {
      data1 = result1;
      const selectedToilet = new Toilet();
      selectedToilet.longitude =  data1.features[0].geometry.coordinates[0];
      selectedToilet.latitude =  data1.features[0].geometry.coordinates[1];
      let data3;
      this.getRoutes.getMapBoxRoute(this.location, selectedToilet).subscribe((result3) => {
        data3 = result3;
        let tes = [];
        for (let step of data3.routes[0].legs[0].steps) {
          for (let intersection of step.intersections) {
            tes.push([intersection.location[1], intersection.location[0]]);
          }
        }
        data3 = new Route(tes, data3.routes[0].legs[0].distance, data3.routes[0].legs[0].duration);
        this.threeRoutes.push(data3);
        if (this.threeRoutes.length === 1) {
          this.routeToToilet(this.threeClosestToilets[1]);
        } else if (this.threeRoutes.length === 2) {
          this.routeToToilet(this.threeClosestToilets[2]);
        }
      });
    });
  }

  // fonction d'affichage de l'itinéraire passé en paramètre
  displayRouteToToilet(route) {
    if (this.path != null) {
      this.myMap.removeLayer(this.path);
    }
    const waypointsArray = [];
    for (let intersection of route.intersections) {
      waypointsArray.push(new L.LatLng(intersection[0], intersection[1]));
    }
    this.path = new L.Polyline(waypointsArray, { color: '#00A8E8' });
    this.myMap.addLayer(this.path);
    const center = {
      latitude: (waypointsArray[0].lat + waypointsArray[waypointsArray.length - 1].lat) / 2,
      longitude: (waypointsArray[0].lng + waypointsArray[waypointsArray.length - 1].lng) / 2
    };
    this.myMap.setView([center.latitude, center.longitude], 15);
  }

  // fonction d'affichage de la position des trois plus proches toilettes ouvertes sur la carte
  searchClosestToilets() {
    if (this.geolocationNotSupported || (!this.geolocationNotSupported && this.searchBarValue !== this.location.name)) {
      this.getRoutes.getAddressMapBoxPosition(this.searchBarValue).subscribe((result: any) => {
        const reg = /Paris/;
        for (let res of result.features) {
          if (reg.test(res.place_name)) {
            this.location.longitude = res.geometry.coordinates[0];
            this.location.latitude = res.geometry.coordinates[1];
            this.location.name = this.searchBarValue;
            break;
          }
        }
        this.myPositionMarker = L.circleMarker([this.location.latitude, this.location.longitude], {radius: 6, stroke: true, weight: 20, color: '#00A8E8', opacity: 0.4, fill: true, fillColor: '#00A8E8', fillOpacity: 1}).addTo(this.myMap); 
        this.myMap.setView([this.location.latitude, this.location.longitude], 15);
        this.continueSearch();
      });
    } else {
      this.continueSearch();
    }
  }

  continueSearch() {  
    const time = new Date().getHours();
    this.getToilets.getOpenToilets(time).subscribe((result: Array<any>) => {
        let openToilets = [];
        for (let openToilet of result) {
          openToilets.push(this.toiletAdapter.adaptToDisplay(openToilet));
        }
      // filtre des trois toilettes les plus proches
      let min = this.getRoutes.calculateDistance(this.location.latitude, openToilets[0].latitude, this.location.longitude, openToilets[0].longitude);
      const closestToilets = [];
      for (let toilet of openToilets) {
        const distance = this.getRoutes.calculateDistance(this.location.latitude, toilet.latitude, this.location.longitude, toilet.longitude);
        if (distance < min) {
          min = distance;
          closestToilets.push(toilet);
        }
      }
      // affichage
      for (let i = closestToilets.length - 1; i > closestToilets.length - 4; i--) {
        this.threeClosestToilets.push(closestToilets[i]);
      }
      let i = 0;
      for (let toilet of this.threeClosestToilets) {
        this.markersArray[i] = L.marker([toilet.latitude, toilet.longitude], {icon: this.myIcon1}).addTo(this.myMap);
        i++;
      }
      this.routeToToilet(this.threeClosestToilets[0]);
    });
  }

  myPositionSelected(event) {
    this.searchBarValue = event;
  }

  change(event) {
    this.displayedRoute = event.path;
    this.displayRouteToToilet(this.displayedRoute);
    this.selectedToilet = event.toilet;
    this.routeToToiletDisplayed = true;
  }

  goClick() {
    this.pathSelected = true;
    for (let marker of this.markersArray) {
      this.myMap.removeLayer(marker);
    }
    this.selectedToiletMarker = L.marker([this.selectedToilet.latitude, this.selectedToilet.longitude], {icon: this.myIcon1}).addTo(this.myMap);
    this.userFollow = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.launchUserFollow();
      }, (error) => {
        return;
      });
    }
  }

  returnFromPathProposal() {
    this.locationDetermined = null;
    this.myMap.remove();
    this.ngOnInit();
    this.path = null;
    this.threeClosestToilets = [];
    this.threeRoutes = [];
    this.routeToToiletDisplayed = false;
    this.displayedRoute = null;
    this.pathSelected = false;
    this.selectedToilet = null;
  }

  returnFromPathSelected() {
    this.myMap.removeLayer(this.path);
    this.myMap.removeLayer(this.selectedToiletMarker);
    let i = 0;
    for (let toilet of this.threeClosestToilets) {
      this.markersArray[i] = L.marker([toilet.latitude, toilet.longitude], {icon: this.myIcon1}).addTo(this.myMap);
      i++;
    }
    this.userFollow = false;
    this.routeToToiletDisplayed = false;
    this.displayedRoute = null;
    this.pathSelected = false;
    this.selectedToilet = null;
  }

  launchUserFollow() {
    if (this.userFollow && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.myMap.removeLayer(this.myPositionMarker);
        this.myPositionMarker = L.circleMarker([position.coords.latitude, position.coords.longitude], {radius: 6, stroke: true, weight: 20, color: '#00A8E8', opacity: 0.4, fill: true, fillColor: '#00A8E8', fillOpacity: 1}).addTo(this.myMap); 
      }, (error) => {
        console.log(error);
      });
    }
    setTimeout(() => {
      this.launchUserFollow();
    }, 5000);
  }

}
