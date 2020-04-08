import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

constructor(private http: HttpClient) { }

getArticals(): Observable<Article[]> {
  const url = 'http://localhost:3000/dashboard/overview';
  return this.http.get<Article[]>(url);
}

}
