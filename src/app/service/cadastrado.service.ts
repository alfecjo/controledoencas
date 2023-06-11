import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastrado } from 'models/cadastrado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastradoService {
  private listaCadastrado: any[];
  private url = 'http://localhost:3000/cadastrados';

  constructor(private httpClient: HttpClient) {
    this.listaCadastrado = [];
  }

  get cadastro() {
    return this.listaCadastrado;
  }

  todas(): Observable<Cadastrado[]> {
    return this.httpClient.get<Cadastrado[]>(this.url);
  }

  adicionar(cadastrado: Cadastrado): Observable<Cadastrado> {
    this.hidratar(cadastrado);
    return this.httpClient.post<Cadastrado>(this.url, cadastrado);
  }

  editar(cadastrado: Cadastrado): Observable<Cadastrado> {
    const url = `${this.url}/${cadastrado.id}`;
    return this.httpClient.put<Cadastrado>(this.url, cadastrado);
  }

  excluir(id: number): Observable<Cadastrado> {
    const url = `${this.url}/${id}`;
    return this.httpClient.delete<Cadastrado>(url);
  }

  buscarDoencaPorId(id: number): Observable<Cadastrado> {
    const url = `${this.url}/${id}`;
    console.log('url: ' + url);
    return this.httpClient.get<Cadastrado>(url);
  }

  private hidratar(cadastrado: any) {
    cadastrado.data = new Date();
  }
}
