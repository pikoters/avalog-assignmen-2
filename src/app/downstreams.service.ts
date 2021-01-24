import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const downstreamEndpoint = 'https://server-details-bff.herokuapp.com/server/';
const converterEndpoint = 'http://api.timezonedb.com/v2.1/';
    

const apikey = 'TE4C1PQ375GT'

const httpHeaders: HttpHeaders = new HttpHeaders({
  Accept : 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class DownstreamsService {

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
    get<ServerDetails>(downstreamEndpoint + 'details').pipe(
      // map(this.extractData),
      catchError(this.handleError)
    );
  }
  
  convertSystemTime( fromTimeZone: string, toTimeZone: string, epochTime: number): Observable<any> {
    // let headersz = new Headers({ Accept : 'application/json'});
    
    return this.http.get<ConvertionMessage>( converterEndpoint + 
              'convert-time-zone\?key\='+ apikey + 
              '\&format\=json\&from\='+ fromTimeZone +'\&to\=' + toTimeZone + '\&time\=' + epochTime,
              { headers: httpHeaders }
    ).pipe(
      catchError(this.handleError)
    )
  }
}

export interface ServerDetails {
  serverTime: string;
  serverDate: string;
  serverTimeZone: string;
}

export interface ConvertionMessage {
    status: string;
    message: string;
    fromZoneName: string;
    fromAbbreviation: string;
    fromTimestamp: number;
    toZoneName: string;
    toAbbreviation: string;
    toTimestamp: number;
    offset: number;
}
