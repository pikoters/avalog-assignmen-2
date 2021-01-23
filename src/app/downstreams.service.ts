import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'https://server-details-bff.herokuapp.com/server/';      

const headers = new HttpHeaders({
  'Access-Control-Allow-Origin':'*'
  // 'access-control-allow-origin':'server-details-bff.herokuapp.com',
  // 'Content-Type': 'text/plain',
  // 'Accept':'*/*',
  // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  // 'Access-Control-Allow-Headers' : 'Origin,Content-Type',
  // 'Access-Control-Request-Headers' : 'Access-Control-Allow-Methods,Access-Control-Allow-Headers',
});


@Injectable({
  providedIn: 'root'
})
export class DownstreamsService {

  // constructor() { }
  constructor(private http: HttpClient) { }


  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getServerDetails(): Observable<any> {
    return this.http.
    get<ServerDetails>(endpoint + 'details').pipe(
      // map(this.extractData),
      catchError(this.handleError)
    );
  }
}

export interface ServerDetails {
  serverTime: string;
  serverDate: string;
  serverTimeZone: string;
}
