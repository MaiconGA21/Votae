import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-criar-votacao-privada',
  templateUrl: './criar-votacao-privada.page.html',
  styleUrls: ['./criar-votacao-privada.page.scss'],
})
export class CriarVotacaoPrivadaPage implements OnInit {

  arrayCandidatos = { nome: [], numero: [] };
  candidatosNome: string;
  candidatosNumero: number;
  quantidade: number = 0;
  candidatos: any

  constructor(
    public db: AngularFireDatabase,
    public alertController: AlertController
  ) { }

  ngOnInit() {

  }

  adicionarCandidatos(nome, numero) {
    if (nome != '' || nome != null && numero != '' || numero != null) {
      this.montarArrayCandidatos(nome, numero);
      return true;
    }
    this.retono('Os campos :nome e número precisam estarem preenchidos');
    return false;
  }

  criarNovaVotacao(nomeVotacao, dataFim, dataInicio, IDEleitor, candidato) {
    console.log(nomeVotacao, dataFim, dataInicio, IDEleitor, candidato);
    var caminho = '/eleicao/privada';
    const gravarEleicao = this.db.object(caminho);
    data['fim'] = dataFim,
    
    var votacao = this.arrayCandidatos;
    votacao.nome = nomeVotacao;
    votacao.data['fim'] = dataFim
    votacao
    votacao
    gravarEleicao.update({votacao});
    this.retono('Votação criada com sucesso.');

  }

  montarArrayCandidatos(nome, numero) {
    this.arrayCandidatos.nome.push(nome);
    this.arrayCandidatos.numero.push(numero);
    // console.log(this.arrayCandidatos);
    this.candidatosNome = '';
    this.quantidade++;
    this.candidatosNumero = null;
    this.candidatos = document.getElementById('candidatosCad');
    this.exibirCandCad(nome, numero);

  }

  exibirCandCad(nome, numero) {

    this.candidatos.innerHTML += '<ion-col size="12">' +
      '<ion-card color="light"> ' +
      '<ion-card-header style="background-color: red">' +
      '<ion-card-title style="color: white">' +
      'Candidato ' + this.quantidade +
      '</ion-card-title>' +
      '</ion-card-header>' +
      '<ion-card-content>' +
      ' <ion-label > </ion-label><hr>' +
      '<ion-item>' +
      '<ion-label>Nome:' + nome + '</ion-label></br>' +
      '</ion-item>' +
      '<ion-item>' +
      '<ion-label>Número:' + numero + '</ion-label></br>' +
      '</ion-item>' +
      '</ion-card-content>' +
      '</ion-card>' +
      '</ion-col>'+
      '<ion-badge color="light" (click)="excluirCandidato(' + (this.quantidade-1) +')><ion-icon ios="ios-podium-outline" md="md-podium"></ion-icon></ion-badge>';
  }
  excluirCandidato(posicao){
    delete  this.arrayCandidatos.nome[posicao];
    delete  this.arrayCandidatos.numero[posicao];
  }

  async retono(msg) {
    const alert = await this.alertController.create({
      header: 'Informativo',
      message: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Informativo');
          }
        }
      ]
    });

    await alert.present();
  }

}
