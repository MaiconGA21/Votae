import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotacaoService {

  constructor() { }
  nome: string;
  id: number;
  candidatos: any;
  tipo: string;
  data: any;
  votosTotal: number;
 

public setNome(nome){
  this.nome = nome;
}

public setId(id){
  this.id = id;
}

public setCandidatos(candidatos){
  this.candidatos = candidatos;
}

public setTipo(tipo){
  this.tipo = tipo;
}

public setData(data){
  this.data = data;
}

public setVotosTotal(votosTotal){
  this.votosTotal = votosTotal;
}

public getNome(){
  return this.nome;
}

public getId(){
  return this.id;
}

public getCandidatos(){
  return this.candidatos;
}

public getTipo(){
  return this.tipo;
}

public getData(){
  return this.data;
}

public getVotosTotal(){
  return this.votosTotal;
}

}
