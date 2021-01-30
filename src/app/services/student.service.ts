import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../utils/models/Student';
import {HttpClient} from '@angular/common/http';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getStudent(id): Observable<Student> {
    return this.http.get(Utils.baseUrl + '/student/'+ id ) as Observable<Student>;
  }
}
