import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ARTICLES } from 'src/app/models/fake-articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];

  constructor() { }

  ngOnInit(): void {
    this.articles = ARTICLES;
    console.log(this.articles);
  }

}
