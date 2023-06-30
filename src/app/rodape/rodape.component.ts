import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css'],
})

export class RodapeComponent implements OnInit{
  @Output() aoTransferir = new EventEmitter<any>();

  ngOnInit(): void {
    const valor: any = '® Desenvolvido por: ACFA.';
    const valorEmitir = { valor: valor };
    this.aoTransferir.emit({ valorEmitir });
  }
}
