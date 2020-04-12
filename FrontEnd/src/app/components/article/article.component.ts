import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticlesService,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    if (this.router.url.indexOf('dashboard/preview') === -1) {
      this.displayArticle();
    } else {
      this.previewArticle();
    }
  }

  displayArticle() {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.articleService.getAnArticle(id).subscribe((a) => {
        if (a === undefined) {
          this.router.navigateByUrl('404');
          return;
        }
        this.article = a;
      });
    });
  }

  previewArticle() {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.dashboardService.previewAnArticle(id).subscribe((a) => {
        if (a === undefined) {
          this.router.navigateByUrl('404');
          return;
        }
        this.article = a;
      });
    });
  }
}
