import { NgModule } from '@angular/core';
import { BooksEditionPage } from './books-edition.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BooksEditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksEditionPageRoutingModule { }
