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

  public login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post(Utils.baseUrl + '/auth/local', {
      email: email,
      password: password,
    }, ) as Observable<LoginResponse>;
  }

  getAll(): Observable<Student>{
    return this.http.get(Utils.baseUrl + '/students') as Observable<Student>;
  }

  public getStudent(id): Observable<Student> {
    return this.http.get(Utils.baseUrl + '/students/'+ id ) as Observable<Student>;
  }

  public updateStudent(id, body): Observable<Student> {
    return this.http.put(Utils.baseUrl + '/students/'+ id, body ) as Observable<Student>;
  }
}

class LoginResponse {
  public accessToken: string;
  public refreshToken: string;
  public user: any;
}
