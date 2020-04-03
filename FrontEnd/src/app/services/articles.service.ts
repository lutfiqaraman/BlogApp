import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article';
import { ARTICLES } from '../models/fake-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  getAllArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;
    return of(articles);
  }
}
