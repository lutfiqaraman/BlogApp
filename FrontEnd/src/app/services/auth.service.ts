import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.apiUrl;
  url: string;

  constructor(private http: HttpClient) {}

  login(name: string, password: string): Observable<any> {
    this.url = this.apiUrl + '/user/login';
    return this.http.post<any>(this.url, {
      name,
      password,
    });
  }

  authUser(): Observable<boolean> {
    let token: string;
    this.url = this.apiUrl + '/user/auth';

    if (typeof localStorage !== 'undefined') {
      token = localStorage.token ? localStorage.token : '';
    }

    return this.http.post<boolean>(this.url, { token });
  }
}
