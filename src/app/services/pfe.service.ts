import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../utils/models/Subject';
import {HttpClient} from '@angular/common/http';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class PfeService {

  constructor(private http: HttpClient) { }

  public getSubjectByStudent(id): Observable<Subject> {
    return this.http.get(Utils.baseUrl + '/pfe/student/'+ id ) as Observable<Subject>;
  }
}

