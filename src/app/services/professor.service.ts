import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentEnum } from '../utils/enums/Department';
import { Professor } from '../utils/models/Professor';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  public getAllProfessors(): Observable<Professor[]> {
    return this.http.get(Utils.baseUrl + '/professors' ) as Observable<Professor[]>;
  }

  public getProfessorsByDepartment(department: DepartmentEnum) : Observable<Professor[]> {
    return this.http.get(Utils.baseUrl + '/professors/department/' + department ) as Observable<Professor[]>;
  }
}
