import { Component } from '@angular/core';
import { CadastradoService } from '../service/cadastrado.service';
import { Cadastrado } from '../../../models/cadastrado.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  ocorrencias: any[] = [];

  constructor(
    private service: CadastradoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.todas().subscribe((ocorrencias: Cadastrado[]) => {
      console.table(this.ocorrencias);
      this.ocorrencias = ocorrencias;
    });
  }

  alterar(Id: number): void {
    this.router.navigateByUrl('/cadastro/' + Id);
  }

  openConfirmaDialog(Id: number): void {
    const confirmDelete = confirm(
      'Tem certeza de que deseja excluir esta ficha?'
    );

    if (confirmDelete) {
      if (Id) {
        this.service.excluir(Id).subscribe(() => {
          this.ngOnInit();
        });
      }
      alert('ID da ficha, "EXCLUIDA"!: ' + Id);
    }
  }
}
