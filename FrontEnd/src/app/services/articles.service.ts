import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  apiUrl: string = environment.apiUrl;
  url: string;

  constructor(private http: HttpClient) {}

  // Get all articles
  getAllArticles(): Observable<Article[]> {
    this.url = this.apiUrl + '/articles';
    return this.http.get<Article[]>(this.url);
  }

  // Get an article
  getAnArticle(id: string): Observable<Article> {
    this.url = this.apiUrl + '/articles/' + id;
    return this.http.get<Article>(this.url);
  }
}
