import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  @Output() aocadastrar = new EventEmitter<any>();

  doenca: any;
  contagio: any;
  leva_a_obito: any;
  socorro: any;
  medicamento: any;
  localidade: any;

  cadastrar() {
    console.log('Cadastro');
    const dados = {
      doenca: this.doenca,
      contagio: this.contagio,
      leva_a_obito: this.leva_a_obito,
      socorro: this.socorro,
      medicamento: this.medicamento,
      localidade: this.localidade,
    };
    this.aocadastrar.emit(dados);
    this.cleanFields();
  }
  cleanFields() {
    this.doenca = '';
    this.contagio = '';
    this.leva_a_obito = '';
    this.socorro = '';
    this.medicamento = '';
    this.localidade = '';
  }
}
