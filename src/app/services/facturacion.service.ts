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

  listarProductos(data: any) {
    return this.HttpClientUtils
      .postQuery('dashboard/productos', data)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
