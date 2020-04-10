import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article: Article = null;

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: string = params.id;
      this.getEditedArticle(id);
    });
  }

  getEditedArticle(id: string): void {
    this.dashboardService.getArticle(id).subscribe((article: Article) => {
      if (article === null) {
        this.router.navigateByUrl('404');
        return;
      }
      this.article = article;
    });
  }

  updateArticle(): void {
    this.dashboardService.updateArticle(this.article).subscribe(result => {
      this.article = result;
    });
  }

}
