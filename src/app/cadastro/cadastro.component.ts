import { Component, Output, EventEmitter } from '@angular/core';
import { CadastradoService } from '../service/cadastrado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cadastrado } from '../../../models/cadastrado.model';

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

  dados: Cadastrado = {
    doenca: '',
    contagio: '',
    leva_a_obito: '',
    socorro: '',
    medicamento: '',
    localidade: '',
  };

  constructor(
    private service: CadastradoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];

    this.service.buscarDoencaPorId(id).subscribe((resposta) => {
      this.dados = resposta;
      this.doenca = this.dados.doenca;
      this.contagio = this.dados.contagio;
      this.leva_a_obito = this.dados.leva_a_obito;
      this.socorro = this.dados.socorro;
      this.medicamento = this.dados.medicamento;
      this.localidade = this.dados.localidade;
    });
  }

  cadastrar() {
    console.log('Cadastro');
    const dadosEmitir: Cadastrado = {
      doenca: this.doenca,
      contagio: this.contagio,
      leva_a_obito: this.leva_a_obito,
      socorro: this.socorro,
      medicamento: this.medicamento,
      localidade: this.localidade,
    };

    this.service.adicionar(dadosEmitir).subscribe({
      next: (resultado) => console.log(resultado),
      error: () => console.log(),
      complete: () => this.router.navigateByUrl('/display'),
    });
  }
}
