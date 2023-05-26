import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'controle-doencas-app';

  dados: any;

  cadastro($event: any) {
    console.log($event);
    this.dados = $event;
  }
}
