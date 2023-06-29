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

  editar(cadastrado: Cadastrado, id: number): Observable<Cadastrado> {
    this.hidratar(cadastrado);
    const url = `${this.url}/${id}`;
    console.log('URL: ' + url);
    return this.httpClient.put<Cadastrado>(url, cadastrado);
  }

  excluir(id: number): Observable<Cadastrado> {
    const url = `${this.url}/${id}`;
    console.log('EXCLUIR: ' + url);
    return this.httpClient.delete<Cadastrado>(url);
  }

  // excluir(id: number): Promise<Cadastrado> {
  //   const url = `${this.url}/${id}`;
  //   console.log('EXCLUIR: ' + url);
  //   return new Promise((resolve, reject) => {
  //     this.httpClient.delete<Cadastrado>(url)
  //       .subscribe(
  //         (response) => {
  //           resolve(response);
  //         },
  //         (error) => {
  //           reject(error);
  //         }
  //       );
  //   });
  // }

  buscarDoencaPorId(id: number): Observable<Cadastrado> {
    const url = `${this.url}/${id}`;
    console.log('url: ' + url);
    return this.httpClient.get<Cadastrado>(url);
  }

  private hidratar(cadastrado: any) {
    cadastrado.data = new Date();
  }
}
