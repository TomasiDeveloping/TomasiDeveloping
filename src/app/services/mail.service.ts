import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mail} from '../models/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendContactMail(mail: Mail): Observable<boolean> {
    return this.http.post<boolean>('https://switchrest.gamingfactory.ch/api/Service/contact', mail);
  }
}
