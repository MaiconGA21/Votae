import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CriarVotacaoPrivadaPage } from './criar-votacao-privada.page';

const routes: Routes = [
  {
    path: '',
    component: CriarVotacaoPrivadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CriarVotacaoPrivadaPage]
})
export class CriarVotacaoPrivadaPageModule {}
