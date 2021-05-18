import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BooksService } from './books/books.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
