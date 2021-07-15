import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { MERLIN } from '../app.api';
import { Book } from './book/book.model';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  constructor(private http: HttpClient,
    private toastr: ToastrService) { }

  books(): Observable<Book[]>{
    return this.http.get<Book[]>(`${MERLIN}/books`).pipe(
      map(books => books),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any): Observable<any>{
    this.exibirMensagem('ERRO!!!', 'Não foi possível realizar a operação!!', 'toast-error');
  return EMPTY
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string ):void {
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo)
  }
}
