import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlesComponent } from './components/articles/articles.component';


const routes: Routes = [];

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
