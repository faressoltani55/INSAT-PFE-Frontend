import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soutenance } from '../utils/models/Soutenance';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {

  constructor(private http: HttpClient) { }

  public getAllSoutenances(): Observable<Soutenance[]> {
    return this.http.get(Utils.baseUrl + '/soutenances' ) as Observable<Soutenance[]>;
  }


  public getSoutenanceById(id: string): Observable<Soutenance> {
    return this.http.get(Utils.baseUrl + '/soutenances/' + id ) as Observable<Soutenance>;
  }
}
