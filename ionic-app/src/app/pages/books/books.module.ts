import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BooksPageRoutingModule } from './books-routing.module';
import { BooksPage } from './books.page';



@NgModule({
  declarations: [BooksPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksPageRoutingModule,
    HttpClientModule
  ]
})
export class BooksPageModule { }
