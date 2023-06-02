import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  titulo: string = 'Controle de Doenças';

  about() {
    alert('Em desenvolvimento da aplicação!');
  }
}
