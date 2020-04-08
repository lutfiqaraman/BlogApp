import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const key = params.key;
      this.articleService.getAnArticle(key).subscribe((a) => {
        if (a === undefined) {
          this.router.navigateByUrl('404');
          return;
        }
        this.article = a;
      });
    });
  }

}
