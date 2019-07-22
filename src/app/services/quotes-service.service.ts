import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class QuotesService {

  constructor() { private http: HttpClient}

  getQuotes(): Observable<any> {
    return this.http.get(this.APP_CONSTANTS.quotesUrl);
  }
}
