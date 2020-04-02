import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: ArticlesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  NavbarComponent,
  FooterComponent,
  ArticlesComponent
];
