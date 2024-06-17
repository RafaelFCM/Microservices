import { Tarefas } from '../interfaces/Tarefas';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TarefasService {

  constructor() { }

  tarefas:Tarefas[] = [
    {id: "1", titulo: "Teste", descricao:"Testando", dataVencimento: "18/04/2024"},
  ]

  listar():Tarefas[]{
    return this.tarefas;
  }

  remover(id:string){
    const tarefa = this.tarefas.find(c => c.id == id);

    if(tarefa){
      const index = this.tarefas.indexOf(tarefa);
      this.tarefas.splice(index,1);
    }

  }

  adicionar(tarefa:Tarefas){
    //espera um objeto do tipo cliente, no parametro, entao precisa montar esse objeto
    this.tarefas.push(tarefa);
  }

}
