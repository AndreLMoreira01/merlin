import { BooksService } from './books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './book/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private booksService:BooksService ) { }

  ngOnInit(): void {
    this.booksService.books().subscribe(books => {
      this.books = books;
    });
  }

}
