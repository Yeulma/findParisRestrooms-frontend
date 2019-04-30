import { Injectable } from '@angular/core';
import { Tools } from '../model/Tools'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStreetsService {

  constructor(private http: HttpClient, private tools: Tools) { }

  getStreetNames(regex) {
    return this.http.get(`${this.tools.url}streets/${regex}`);
  }

}
