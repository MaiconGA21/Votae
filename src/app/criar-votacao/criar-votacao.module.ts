import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CriarVotacaoPage } from './criar-votacao.page';

const routes: Routes = [
  {
    path: '',
    component: CriarVotacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CriarVotacaoPage]
})
export class CriarVotacaoPageModule {}
