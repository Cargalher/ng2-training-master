import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LicensePlate } from './license-plate';
import {LICENSE_PLATES} from "./mock-data";
@Injectable({
  providedIn: 'root'
})
export class LicensePlateService { //1. We've got a service that



  constructor(private http:HttpClient) { }

  getList(): Observable <LicensePlate[]> { //2. returns an Observable
  return this.http.get<LicensePlate[]>('http://localhost:8000/data')
}

}

// 3.and our component (app.component.ts) is subscribing to that to get some data
// of(LICENSE_PLATES);
