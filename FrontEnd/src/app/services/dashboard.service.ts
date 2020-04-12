import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiUrl: string = environment.apiUrl;
  url: string;

  constructor(private http: HttpClient) {}

  // Get all articles
  getArticals(): Observable<Article[]> {
    this.url = this.apiUrl + '/dashboard/overview';
    return this.http.get<Article[]>(this.url);
  }

  // Get an article
  getAnArticle(id: string): Observable<Article> {
    this.url = this.apiUrl + '/dashboard/article/' + id;
    return this.http.get<Article>(this.url);
  }

  previewAnArticle(id: string): Observable<Article> {
    this.url = this.apiUrl + '/dashboard/preview/' + id;
    return this.http.get<Article>(this.url);
  }

  // Update an article
  updateArticle(article: Article): Observable<Article> {
    this.url = this.apiUrl + '/dashboard/' + article.id;
    return this.http.put<Article>(this.url, article);
  }
}
