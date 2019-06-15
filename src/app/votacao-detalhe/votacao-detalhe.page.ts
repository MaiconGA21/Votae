import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VotacaoService } from '../votacao.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-votacao-detalhe',
  templateUrl: './votacao-detalhe.page.html',
  styleUrls: ['./votacao-detalhe.page.scss'],
})
export class VotacaoDetalhePage implements OnInit {
  eleicao: any;
  nome: string;
  id: number;
  candidatos: any;
  tipo: string;
  data: any;
  votosTotal: number;
  idEleicao: number;
  caminho: string;
  votacao:number;
  confirmarVoto:boolean = true;
  
  constructor(
    private route: ActivatedRoute,
     public eleicaoService: VotacaoService,
     public db: AngularFireDatabase,
     public alertController: AlertController
  ) { }

  ngOnInit() {
    this.nome = this.eleicaoService.getNome();
    this.id = this.eleicaoService.getId();
    this.candidatos = this.eleicaoService.getCandidatos();
    this.tipo = this.eleicaoService.getTipo();
    this.data = this.eleicaoService.getData();
    this.votosTotal = this.eleicaoService.getVotosTotal();
    this.votacao = 0;
    console.log(this.candidatos);
  }

  gravarVoto(candidatos,i) {
    if (this.tipo == 'PR') {
      this.caminho = '/eleicao/privada/votacao';
    } else {
      this.caminho = '/eleicao/publica/votacao';
    }
    this.presentAlertConfirm(candidatos,i);
    }
    
  
  async presentAlertConfirm(candidatos,i) {
    var candidato = candidatos[i];
    const alert = await this.alertController.create({
      header: 'Confirmar voto?',
      message: 'Deseja confirmar o voto para o candidatos <strong>'+ candidato['nome']+' N° '+candidato['NumCandidato']+'</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmar voto: Não');
            this.retono('Voto não computado, escolha outro candidato.');
            
          }
        }, {
          text: 'Confirmado',
          handler: () => {
            this.caminho +=this.id;
            candidatos[i].votosRecebidos = candidatos[i].votosRecebidos + 1;
            const gravaVoto = this.db.object(this.caminho);

            gravaVoto.update({ candidatos });
            console.log(21);

            this.retono('Voto computado para o candidato: <strong>'+ candidato['nome']+' N° '+candidato['NumCandidato']+'</strong>');
            console.log('Confirm voto: sim');
          }
        }
      ]
    });

    await alert.present();
  }
  async retono(msg) {
    const alert = await this.alertController.create({
      header: 'Informativo',
      message: msg,
      buttons: [
     {
          text: 'Ok',
          handler: () => {
            this.confirmarVoto = true;
            console.log('Informativo');
          }
        }
      ]
    });

    await alert.present();
  }
}
