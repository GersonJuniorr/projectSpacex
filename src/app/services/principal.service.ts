import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) { }

  URL_API = 'https://api.spacexdata.com/v3';

  getRockets() {
    return this.http.get(`${this.URL_API}/rockets`);
  }
}
