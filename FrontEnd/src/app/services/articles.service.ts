import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  getAnArticle(key: string): Observable<Article> {
    return this.http.get<Article>('http://localhost:3000/articles/' + key);
  }
}
