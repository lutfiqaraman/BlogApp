import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArticleOverviewComponent } from './components/dashboard/article-overview/article-overview.component';
import { EditArticleComponent } from './components/dashboard/edit-article/edit-article.component';
import { LoginComponent } from './components/login/login.component';
import { RouteguardService } from './services/routeguard.service';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RouteguardService],
  },
  {
    path: 'dashboard/:id',
    component: EditArticleComponent,
    canActivate: [RouteguardService],
  },
  {
    path: 'dashboard/preview/:id',
    component: ArticleComponent,
    canActivate: [RouteguardService],
  },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', component: ArticlesComponent },
  { path: ':id', component: ArticleComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  NavbarComponent,
  FooterComponent,
  LoginComponent,
  ArticlesComponent,
  ArticleComponent,
  NotFoundComponent,
  DashboardComponent,
  ArticleOverviewComponent,
  EditArticleComponent,
];
