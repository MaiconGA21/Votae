import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-criar-votacao-privada',
  templateUrl: './criar-votacao-privada.page.html',
  styleUrls: ['./criar-votacao-privada.page.scss'],
})
export class CriarVotacaoPrivadaPage implements OnInit {

  qtdeCandidatos: number=0;
  arrayCandidatos: any;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
  }

  adicionarCandidatos(){
    this.qtdeCandidatos++;

    const candidatos = document.getElementById('candidatos');
    candidatos.innerHTML +='<ion-col size="12">' + 
    '<ion-card color="light"> '+  
    '<ion-card-header style="background-color: red">'+
    '<ion-card-title style="color: white">'+
    'Candidato '+  (this.qtdeCandidatos) +
    '</ion-card-title>'+
  '</ion-card-header>'+
  '<ion-card-content>'+
    ' <ion-label > </ion-label><hr>'+        
   '<ion-item>'+
     '<ion-label>Nome do candidato:</ion-label>'+
     '<ion-input [(ngModel)]="candidatosNome'+this.qtdeCandidatos+'" type="text"></ion-input>'+
   '</ion-item>'+
   '<ion-item>'+
     '<ion-label>Numero do candidato:</ion-label>'+
     '<ion-input [(ngModel)]="candidatosNumero'+this.qtdeCandidatos+'" type="number"></ion-input>'+
   '</ion-item>'+
   '<ion-button expand="block" color="success" (click)="montarArrayCandidatos(1,2)">Validar</ion-button>' +
   '</ion-card-content>'+
   '</ion-card>' +
   '</ion-col>';
  }

  criarNovaVotacao(nomeVotacao, dataFim, dataInicio, IDEleitor, candidato){
    console.log(nomeVotacao, dataFim, dataInicio, IDEleitor, candidato);
    var caminho = '/eleicao/privada';
    const gravarEleicao = this.db.object(caminho);
    gravarEleicao.update({ });
  }

  montarArrayCandidatos(nome, numero) {
    console.log(nome,numero);
    /* this.arrayCandidatos.push(nome, numero); */
  }

}
