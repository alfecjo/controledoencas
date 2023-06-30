import { Component } from '@angular/core';
import { CadastradoService } from './service/cadastrado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'controleDoc';
  autor: any;

  constructor(private service: CadastradoService) {}

  recebeValor($event: any) {
    this.autor = JSON.stringify($event.valorEmitir);

    console.log('autor...' + this.autor);
  }
}
