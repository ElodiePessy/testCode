import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Langage } from 'src/app/shared/models/langage';

@Injectable({ providedIn: 'root' })
export class LangageService {

    private langagesUrl = 'http://localhost:8080/langages';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    getLangages(): Observable<Langage[]> {
        return this.http.get<Langage[]>(`${this.langagesUrl}`)
            .pipe(
                tap(_ => this.log('fetched langages')),
                catchError(this.handleError<Langage[]>('getLangages', []))
            );
        
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
      /** Log a LangageService message with the MessageService */
      private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
      }





}
