import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private baseUrl =
    'https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev';
  private offset: number = 0;

  constructor(private http: HttpClient) {}

  getPlantDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  loadMore(): Observable<any> {
    this.offset += 10;
    return this.http.get(`${this.baseUrl}` + '?offset=' + this.offset);
  }

  getPlantDetail(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/` + id + '/');
  }
}
