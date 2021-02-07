import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectStatus } from '../utils/enums/subject-status';
import { Subject  } from '../utils/models/Subject';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private http: HttpClient) { }

  public getSubjectByStudent(id): Observable<Subject> {
    return this.http.get(Utils.baseUrl + '/pfe/student/'+ id ) as Observable<Subject>;
  }

  public getSubjectByProfessor(id): Observable<Subject> {
    return this.http.get(Utils.baseUrl + '/pfe/professor/'+ id ) as Observable<Subject>;
  }

  public getSubjectByRequestedProfessor(id): Observable<Subject> {
    return this.http.get(Utils.baseUrl + '/pfe/requested/professor/'+ id ) as Observable<Subject>;
  }
  
  public getAllSujets(): Observable<Subject[]> {
    return this.http.get(Utils.baseUrl + '/pfe' ) as Observable<Subject[]>;
  }

  public getSujetsByStatus(status: SubjectStatus): Observable<Subject[]> {
    return this.http.get(Utils.baseUrl + '/pfe?status=' + status ) as Observable<Subject[]>;
  }

  public getSujetById(id: string): Observable<Subject> {
    return this.http.get(Utils.baseUrl + '/pfe/' + id ) as Observable<Subject>;
  }

  public addSujet(body): Observable<Subject> {
    return this.http.post(Utils.baseUrl + '/pfe' , body) as Observable<Subject>;
  }

  public updateSujet(id: string, updatedFields): Observable<SubjectStatus> {
    return this.http.put(Utils.baseUrl + '/pfe/' + id, updatedFields) as Observable<SubjectStatus>;
  }

}
