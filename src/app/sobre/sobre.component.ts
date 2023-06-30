import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent {
  chave = 'minhaEntidade';
  valorArmazenado: string | null;

  constructor() {
    this.valorArmazenado = localStorage.getItem(this.chave);
  }

  cadastrarEntidade(): void {
    const valor = { nome: '® Desenvolvido por: ACFA', instituicao: 'UTFPR' };

    localStorage.setItem(this.chave, JSON.stringify(valor));

    this.valorArmazenado = localStorage.getItem(this.chave);

    if (this.valorArmazenado) {
      const valorParseado = JSON.parse(this.valorArmazenado);
      console.log(valorParseado);
      alert(valorParseado.nome + ', Instituição: '+ valorParseado.instituicao);
    } else {
      console.log('Nenhum valor encontrado para a chave: ' + this.chave);
    }
  }
}
