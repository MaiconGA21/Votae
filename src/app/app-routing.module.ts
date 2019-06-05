import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'criar-votacao', loadChildren: './criar-votacao/criar-votacao.module#CriarVotacaoPageModule' },
  { path: 'criar-votacao-publica', loadChildren: './criar-votacao-publica/criar-votacao-publica.module#CriarVotacaoPublicaPageModule' },
  { path: 'criar-votacao-privada', loadChildren: './criar-votacao-privada/criar-votacao-privada.module#CriarVotacaoPrivadaPageModule' },
  { path: 'esqueceu-senha', loadChildren: './esqueceu-senha/esqueceu-senha.module#EsqueceuSenhaPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'votacao-detalhe', loadChildren: './votacao-detalhe/votacao-detalhe.module#VotacaoDetalhePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
