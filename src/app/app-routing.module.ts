import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'books', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
