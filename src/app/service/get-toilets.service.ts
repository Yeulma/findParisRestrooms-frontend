import { Injectable } from '@angular/core';
import { Tools } from '../model/Tools'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetToiletsService {

  constructor(private http: HttpClient, private tools: Tools) { }

  getOpenToilets(time: number) {
    return this.http.get(`${this.tools.url}toilets/${time}`);
  }

}
