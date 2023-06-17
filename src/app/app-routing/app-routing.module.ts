import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayComponent } from '../display/display.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { SobreComponent } from '../sobre/sobre.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'display',
    pathMatch: 'full',
  },
  {
    path: 'display',
    component: DisplayComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    // rota do botão editar, em display
    path: 'cadastro/:id',
    component: CadastroComponent,
  },
  {
    path: 'cadastrados/:id',
    component: DisplayComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
