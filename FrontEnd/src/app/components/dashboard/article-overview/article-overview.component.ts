import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.css'],
})
export class ArticleOverviewComponent implements OnInit {
  articles: Article[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.dashboardService
      .getArticals()
      .subscribe((articles) => (this.articles = articles));
  }
}
