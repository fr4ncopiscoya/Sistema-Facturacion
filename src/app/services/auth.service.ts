import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientUtils } from '../utils/http-client.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClientUtils: HttpClientUtils) { }

  login(data: any): Observable<any> {
    return this.httpClientUtils
      .postQueryJwt('auth/login/', data)
      .pipe(
        map((data: any) => {
          console.log("data-service: ", data);
          // Aquí podrías guardar el token en localStorage si lo deseas
          localStorage.setItem('token', data.access); // Asume que el token viene en la propiedad 'access'
          return data;
        })
      );
  }
}
