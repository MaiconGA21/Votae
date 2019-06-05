import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-votacao',
  templateUrl: './criar-votacao.page.html',
  styleUrls: ['./criar-votacao.page.scss'],
})
export class CriarVotacaoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  navPublica(){
    this.navCtrl.navigateForward('criar-votacao-publica');
  }

  navPrivada(){
    this.navCtrl.navigateForward('criar-votacao-privada');
  }

}
