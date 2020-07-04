import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendEmailService {
  url: string = 'https://carrleasing.ipzmarketing.com/api/v1/send_emails';
  constructor(private http: HttpClient) {}

  post(
    clientName: string,
    clientEmail: string,
    subject: string,
    content: any,
    tag: string
  ): Observable<any> {
    return this.http.post<any>(this.url, {
      from: {
        email: 'danny@carrleasing.com',
        name: 'CARRLEASING',
      },
      to: [
        {
          email: clientEmail,
          name: clientName,
        },
      ],
      subject: subject,
      html_part: content,
      text_part: '',
      text_part_auto: true,
      headers: {
        'x-auth-token': 'FouYWZcaEjTyVagioNs11qJGu_ims3eBVgJ5YX7i',
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
      },
      smtp_tags: [tag],
    });
  }
}
