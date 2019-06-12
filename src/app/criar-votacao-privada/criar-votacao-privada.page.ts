import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-votacao-privada',
  templateUrl: './criar-votacao-privada.page.html',
  styleUrls: ['./criar-votacao-privada.page.scss'],
})
export class CriarVotacaoPrivadaPage implements OnInit {

  qtdeCandidatos: number=0;

  constructor() { }

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
     '<ion-input type="text"></ion-input>'+
   '</ion-item>'+
   '<ion-item>'+
     '<ion-label>Numero do candidato:</ion-label>'+
     '<ion-input type="number"></ion-input>'+
   '</ion-item>'+
   '</ion-card-content>'+
   '</ion-card>' +
   '</ion-col>';
  }

  

}
