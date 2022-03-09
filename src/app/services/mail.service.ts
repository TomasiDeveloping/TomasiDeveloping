import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mail} from '../models/mail';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private readonly apiUrl = environment.apiUrl + 'tomasi';
  private readonly apiAuth = window.btoa(`${environment.apiUserName}:${environment.apiPassword}`);
  private readonly headers = new HttpHeaders().set('Authorization', `Basic ${this.apiAuth}`);

  constructor(private http: HttpClient) {
  }

  sendContactMail(mail: Mail): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, mail, {headers: this.headers});
  }
}
