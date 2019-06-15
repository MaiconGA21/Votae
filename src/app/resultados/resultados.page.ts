import { Component, OnInit } from '@angular/core';
import { VotacaoService } from '../votacao.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})

export class ResultadosPage implements OnInit {
  listaPu:any;
  listaPr:any;
  candidatos:any;
  eleicao: any;
  nome: string;
  id: number;
 
  tipo: string;
  data: any;
  votosTotal: number;
  idEleicao: number;
  caminho: string;
  votacao:number;
  confirmarVoto:boolean = true;
  constructor( public eleicaoService: VotacaoService, public db:AngularFireDatabase) { 
    this.exibirResultado(eleicaoService)
  }

  ngOnInit() {
  }

  exibirResultado(eleicao = null){
    if(eleicao.getId()){
      this.exibirResultadoEspecificoEleicao(eleicao);
    }else{
      this.exibirResultadoGenericoEleicao();
    }

  }

  exibirResultadoEspecificoEleicao(eleicao){
    console.log(eleicao);
    this.nome = this.eleicaoService.getNome();
    this.id = this.eleicaoService.getId();
    this.candidatos = this.eleicaoService.getCandidatos();
    this.tipo = this.eleicaoService.getTipo();
    this.data = this.eleicaoService.getData();
    this.votosTotal = this.eleicaoService.getVotosTotal();
    this.votacao = 0;
    this.candidatos = this.eleicaoService.getCandidatos();
    eleicao.setId(null)
    
    return true;
  }

  exibirResultadoGenericoEleicao(){
    this.listaPr = this.db.list('/eleicao/privada').valueChanges();
    this.listaPu = this.db.list('/eleicao/publica').valueChanges();
    console.log(this.listaPr);
    
  }
  
}
