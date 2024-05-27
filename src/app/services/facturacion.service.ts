import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, firstValueFrom } from 'rxjs';
import { HttpClientUtils } from '../utils/http-client.utils';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  constructor(
    private HttpClientUtils: HttpClientUtils
  ) { }

  listarCategorias() {
    return this.HttpClientUtils
      .getQueryJwt('dashboard/categoria')
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  listarProductos() {
    return this.HttpClientUtils
      .getQueryJwt('dashboard/producto')
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
