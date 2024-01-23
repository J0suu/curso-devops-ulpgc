import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BooksEditionPage } from './books-edition.page';
import { BooksEditionPageRoutingModule } from './books-edition-routing.module';



@NgModule({
  declarations: [BooksEditionPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksEditionPageRoutingModule,
    HttpClientModule
  ]
})
export class BooksEditionPageModule { }
