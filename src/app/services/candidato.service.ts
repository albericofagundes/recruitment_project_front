import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_SISTEMA } from '../core/url_api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatoService {
  private readonly apiUrl = 'http://127.0.0.1:8000/candidatos-all/';

  constructor(private http: HttpClient) {}

  public obterListaCandidatos(): Observable<any> {
    let retorno = this.http.get(this.apiUrl);
    console.log('retorno', retorno);

    return retorno;
  }
}
