import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MapComponent } from './component/map/map.component';
import { GetToiletsService } from './service/get-toilets.service';
import { GetStreetsService } from './service/get-streets.service';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { PathInformationComponent } from './component/path-information/path-information.component';
import { GetRoutesService } from './service/get-routes.service';
import { DistancePipe } from './pipe/distance.pipe';
import { TimePipe } from './pipe/time.pipe';
import { AddressPipe } from './pipe/address.pipe';
import  { Tools } from './model/Tools';
import { StreetAdapter } from './adapter/street-adapter';
import { ToiletAdapter } from './adapter/toilet-adapter';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchBarComponent,
    PathInformationComponent,
    DistancePipe,
    TimePipe,
    AddressPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    GetToiletsService,
    GetStreetsService,
    GetRoutesService,
    ToiletAdapter,
    StreetAdapter,
    Tools
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
