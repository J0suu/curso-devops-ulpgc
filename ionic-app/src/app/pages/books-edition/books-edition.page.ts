import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-edition',
  templateUrl: './books-edition.page.html',
  styleUrls: ['./books-edition.page.scss'],
})
export class BooksEditionPage implements OnInit {

  book: Book = {
    id: 0,
    name: '',
    author: '',
    published: '',
    isbn: '',
    cover: ''
  };

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];
  
  published = (new Date()).toISOString();
  bookId?: number;

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private navController: NavController,
    private alertController: AlertController) { }

    books: Book[] = [];

  ngOnInit() {
    // Comprobamos si tenemos id, para llamar al servicio y obtener los datos del libro.

    this.route.queryParams.subscribe(params => {
      if (!!params['book']) {
        this.bookId = params["book"];
      }
    });
    
    if (this.bookId){
      this.bookService.getBook(this.bookId).subscribe((book) => {
        this.book = book;
      })
    }  
    
  }
  
  saveChanges() {
    this.book.published = this.published;

    if (!!this.book.id) {
      this.bookService.updateBook(this.book).subscribe(
        resp =>{
          this.navController.navigateForward('reviews');
        }
      );
    } else {
      this.bookService.createBook(this.book).then(
        resp =>{
          const navExtras: NavigationExtras =  {
            queryParams:{
              newBook: this.book              
            }
          };
          this.navController.navigateForward('reviews');
        }
      );
    }
  }

  delete() {
    if (!!this.book.id) {

      this.presentAlert();

      this.bookService.deleteBook(this.book.id)
        .then(resp => {
          this.navController.navigateForward('reviews');
        });
    }
  }

  handlerMessage = '';
  roleMessage = '';

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Seguro que deseas borrar este libro ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alerta canceleda';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alerta confirmada';
          },
        },
      ],
    });

    await alert.present();
  }
}
