import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plant } from './models/plant.model';
import { Observable } from 'rxjs';

// let token = JSON.parse(sessionStorage.getItem('currentUser'))

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('currentUser')
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private plantUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product/?limit=100'

  constructor(private _http: HttpClient) { }

  getPlants() : Observable <Plant[]> {
    return this._http.get<Plant[]>(this.plantUrl)
  }

  deletePlant(id) {
    console.log(id);
    console.log(`${this.plantUrl}/${id}`);
    let deleteUrl = `https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`
    return this._http.delete(deleteUrl, httpOptions);
  }
}