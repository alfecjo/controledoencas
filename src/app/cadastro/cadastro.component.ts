import { Component } from '@angular/core';
import { CadastradoService } from '../service/cadastrado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cadastrado } from '../../../models/cadastrado.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  id: number = 0;
  doenca: any;
  contagio: any;
  leva_a_obito: any;
  socorro: any;
  medicamento: any;
  localidade: any;

  cadastrarDisabledDoenca: boolean = true;
  cadastrarDisabledContagio: boolean = true;
  cadastrarDisabledLeva_a_Obito: boolean = true;
  cadastrarDisabledSocorro: boolean = true;
  cadastrarDisabledMedicamento: boolean = true;
  cadastrarDisabledLocalidade: boolean = true;

  mostrarErroDoenca: boolean = false;
  mostrarErroContagio: boolean = false;
  mostrarErroLeva_a_Obito: boolean = false;
  mostrarErroSocorro: boolean = false;
  mostrarErroMedicamento: boolean = false;
  mostrarErroLocalidade: boolean = false;

  valRegex: RegExp = /^[a-zA-Z\s]+$/;
  complemento: string = ' deve conter apenas letras e espaços.';

  mensagemErroDoenca: string = 'Doença' + this.complemento;
  mensagemErroContagio: string = 'Contagio' + this.complemento;
  mensagemErroLeva_a_Obito: string = 'Leva a óbito' + this.complemento;
  mensagemErroSocorro: string = 'Socorro' + this.complemento;
  mensagemErroMedicamento: string = 'Medicamento' + this.complemento;
  mensagemErroLocalidade: string = 'Localidade' + this.complemento;

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
    this.id = this.route.snapshot.params['id'];

    this.service.buscarDoencaPorId(this.id).subscribe((resposta) => {
      this.dados = resposta;
      this.doenca = this.dados.doenca;
      this.contagio = this.dados.contagio;
      this.leva_a_obito = this.dados.leva_a_obito;
      this.socorro = this.dados.socorro;
      this.medicamento = this.dados.medicamento;
      this.localidade = this.dados.localidade;
    });

    if (this.id != null) {
      this.validarDoenca();
      this.validarContagio();
      this.validarLeva_a_Obito();
      this.validarSocorro();
      this.validarMedicamento();
      this.validarLocalidade();
    }
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

    if (this.id != null) {
      this.service.editar(dadosEmitir, this.id).subscribe({
        next: (resultado) => console.log(resultado),
        error: () => console.log(),
        complete: () => this.router.navigateByUrl('/display'),
      });
    } else {
      this.service.adicionar(dadosEmitir).subscribe({
        next: (resultado) => console.log(resultado),
        error: () => console.log(),
        complete: () => this.router.navigateByUrl('/display'),
      });
    }
  }

  validarDoenca() {
    const isDoencaValida = this.valRegex.test(this.doenca);
    this.cadastrarDisabledDoenca = !isDoencaValida;
    this.mostrarErroDoenca = !isDoencaValida;
  }

  validarContagio() {
    const isContagioValida = this.valRegex.test(this.contagio);
    this.cadastrarDisabledContagio = !isContagioValida;
    this.mostrarErroContagio = !isContagioValida;
  }

  validarLeva_a_Obito() {
    const isLeva_a_ObitoValida = this.valRegex.test(this.leva_a_obito);
    this.cadastrarDisabledLeva_a_Obito = !isLeva_a_ObitoValida;
    this.mostrarErroLeva_a_Obito = !isLeva_a_ObitoValida;
  }

  validarSocorro() {
    const isSocorroValida = this.valRegex.test(this.socorro);
    this.cadastrarDisabledSocorro = !isSocorroValida;
    this.mostrarErroSocorro = !isSocorroValida;
  }

  validarMedicamento() {
    const isMedicamentValida = this.valRegex.test(this.medicamento);
    this.cadastrarDisabledMedicamento = !isMedicamentValida;
    this.mostrarErroMedicamento = !isMedicamentValida;
  }

  validarLocalidade() {
    const isLocalidadeValida = this.valRegex.test(this.localidade);
    this.cadastrarDisabledLocalidade = !isLocalidadeValida;
    this.mostrarErroLocalidade = !isLocalidadeValida;
  }
}
