import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articleService
      .getAllArticles()
      .subscribe((a) => (this.articles = a));
  }
}
