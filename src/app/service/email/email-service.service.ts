import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private apiUrl = '/.netlify/functions/sendEmail'; // URL da função Netlify

  constructor(private http: HttpClient) {}

  sendEmail(to: string, subject: string, text: string) {
    const body = { to, subject, text };
    return this.http.post(this.apiUrl, body);
  }
}
