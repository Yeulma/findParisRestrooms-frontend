import { Injectable } from '@angular/core';
import { Tools } from '../model/Tools'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetRoutesService {

  constructor(private http: HttpClient, private tools: Tools) { }

  getToiletsMapBoxPosition(toilet) {
    return this.http.get(`${this.tools.mapBox.GEOCODING_URL}${toilet.longitude},${toilet.latitude}.json?&types=address${this.tools.mapBox.TOKEN}`);
  }

  getMyMapBoxPosition(location) {
    return this.http.get(`${this.tools.mapBox.GEOCODING_URL}${location.longitude},${location.latitude}.json?types=address${this.tools.mapBox.TOKEN}`);
  }

  getAddressMapBoxPosition(address) {
    return this.http.get(`${this.tools.mapBox.GEOCODING_URL}${address}.json?bbox=2.244911,48.814369,2.423027,48.904734${this.tools.mapBox.TOKEN}`);
  }

  getMapBoxRoute(location, toilet) {
    return this.http.get(`${this.tools.mapBox.DIRECTIONS_URL}${location.longitude},${location.latitude};${toilet.longitude},${toilet.latitude}?steps=true${this.tools.mapBox.TOKEN}`);
  }

  calculateDistance(latA, latB, lonA, lonB) {
    return ((Math.acos(Math.sin(latA) * Math.sin(latB) + Math.cos(latA) * Math.cos(latB) * Math.cos(lonB - lonA))) * 6378137);
  }

}
