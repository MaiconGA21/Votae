import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-votacao-publica',
  templateUrl: './criar-votacao-publica.page.html',
  styleUrls: ['./criar-votacao-publica.page.scss'],
})
export class CriarVotacaoPublicaPage implements OnInit {

  qtdeCandidatos = [
    { id: 2, qtde: '2 candidatos' },
    { id: 3, qtde: '3 candidatos' },
    { id: 4, qtde: '4 candidatos' },
    { id: 5, qtde: '5 candidatos' }
  ]

  qtdeSelecionada: any;

  constructor() { }

  ngOnInit() {
  }

  checarQtde(selec: number) {
    if (
      selec == 2 ||
      selec == 3 ||
      selec == 4 ||
      selec == 5
    ) {
      return true;
    } else {
      return false;
    }
  }

}
