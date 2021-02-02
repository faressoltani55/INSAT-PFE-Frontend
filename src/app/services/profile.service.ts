import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Utils} from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getAllStudents(): Observable<Subject[]> {
    return this.http.get(Utils.baseUrl + '/student' ) as Observable<Subject[]>;
  }

  public getStudentsByStatus(status: SubjectStatus): Observable<Subject[]> {
    return this.http.get(Utils.baseUrl + '/pfe?status=' + status ) as Observable<Subject[]>;
  }

  public getStudentById(id: string): Observable<Subject> {
    return this.http.get(Utils.baseUrl + '/pfe/' + id ) as Observable<Subject>;
  }

  public updateStudentStatus(id: string, status: SubjectStatus): Observable<SubjectStatus> {
    return this.http.patch(Utils.baseUrl + '/pfe/' + id, {status: status}) as Observable<SubjectStatus>;
  }

  public updateStudentAdministrationNotice(id: string, notice: string) {
    return this.http.patch(Utils.baseUrl + '/pfe/' + id + '/notice', {administrationNotice: notice});
  }
}
