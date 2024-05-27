import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HttpClientUtils {
    urlApi: string = environment.apiBackEndURL;
    urlPide: string = environment.apiPide;
    urlApiMaster: string = environment.apiMaster;
    urlApiIp: string = environment.apiGetIp;

    constructor(private httpClient: HttpClient, private router: Router) { }

    getQuery(query: string) {
        const url = `${this.urlApi + query}`;
        return this.httpClient.get(url);
    }

    postQueryJwt(query: string, params: any, jwt: boolean = false): Observable<any> {
        console.log("jwt");

        const url = `${this.urlApi}${query}`;

        if (jwt) {
            const token = localStorage.getItem('token');
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
            return this.httpClient.post(url, params, { headers });
        } else {
            return this.httpClient.post(url, params);
        }
    }

    getQueryJwt(query: string, jwt: boolean = false): Observable<any> {
        const url = `${this.urlApi}${query}`;
        console.log("url:",url);
        
        if (jwt) {
            const token = localStorage.getItem('token');
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
            return this.httpClient.get(url, { headers });
        } else {
            return this.httpClient.get(url);
        }
    }

    getQueryIp() {
        const url = `${this.urlApiIp}`;
        return this.httpClient.get(url);
    }

    postQuery(query: string, params: any) {
        const url = `${this.urlApi + query}`;
        return this.httpClient.post(url, params);
    }

    postQueryMaster(query: string, params: any) {
        const url = `${this.urlApiMaster + query}`;
        return this.httpClient.post(url, params);
    }

    postQueryPide(query: string, params: any) {
        const url = `${this.urlPide + query}`;
        return this.httpClient.post(url, params);
    }

    postQueryObs(query: string, params: any): Observable<any> {
        const url = `${this.urlApi}${query}`;
        return this.httpClient.post(url, params, { responseType: 'blob' });
    }
}