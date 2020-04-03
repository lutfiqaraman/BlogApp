import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutComponent } from './components/about/about.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: ArticlesComponent },
  { path: ':key', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  NavbarComponent,
  FooterComponent,
  ArticlesComponent,
  ArticlesComponent
];
