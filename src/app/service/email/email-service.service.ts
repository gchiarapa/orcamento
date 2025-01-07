import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private apiUrl = 'https://orcamento-grajau.netlify.app/.netlify/functions/sendEmail';

  constructor(private http: HttpClient) {}

  sendEmail(to: string, subject: string, text: string) {
    const body = { to, subject, text };
    console.log("Iniciando envio de email.... com o body", body);
    console.log("Iniciando envio de email.... com a url", this.apiUrl);
    
    return this.http.post(this.apiUrl, body);
  }
}
