import { Injectable } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  post(serviceName: string, data: any) {

    const header = new HttpHeaders();
    const options = { headers: header, withCreadentials: false };

    const url = environment.apiUrl + serviceName;
    return this.httpClient.post(url, JSON.stringify(data), options);

  }
}
