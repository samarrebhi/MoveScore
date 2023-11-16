import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }

  getEmailAddresses() {
    return this.http.get<string[]>('http://localhost:3000/api/getEmailAddresses');
  }
}
