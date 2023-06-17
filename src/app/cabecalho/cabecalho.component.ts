import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CadastradoService } from '../service/cadastrado.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  titulo: string = '';

  constructor(
    private service: CadastradoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  about() {
    this.router.navigateByUrl('/sobre');
  }
}
