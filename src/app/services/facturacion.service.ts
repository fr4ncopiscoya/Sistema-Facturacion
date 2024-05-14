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

  listarAreaOficina(data: any) {
    return this.HttpClientUtils
      .postQuery('sigta/areaoficina/listar', data)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
