import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CriarVotacaoPublicaPage } from './criar-votacao-publica.page';

const routes: Routes = [
  {
    path: '',
    component: CriarVotacaoPublicaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CriarVotacaoPublicaPage]
})
export class CriarVotacaoPublicaPageModule {}
