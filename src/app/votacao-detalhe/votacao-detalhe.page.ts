import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VotacaoService } from '../votacao.service';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-votacao-detalhe',
  templateUrl: './votacao-detalhe.page.html',
  styleUrls: ['./votacao-detalhe.page.scss'],
})
export class VotacaoDetalhePage implements OnInit {

  constructor(private route: ActivatedRoute, public eleicaoService: VotacaoService,public db: AngularFireDatabase) { }
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
    this.caminho +=this.id;
    candidatos[i].votosRecebidos = candidatos[i].votosRecebidos + 1;
    const gravaVoto = this.db.object(this.caminho);

    gravaVoto.update({ candidatos });
    const itemRef = this.db.object(this.caminho);
  }

}
