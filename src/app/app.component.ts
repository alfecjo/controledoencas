import { Component } from '@angular/core';
import { CadastradoService } from './service/cadastrado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'controleDoc';
  constructor(private service: CadastradoService) {}
}
