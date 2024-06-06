import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {

  tarefas: Tarefa[] = [
    { id: '38582', titulo: "Arrumar armário", descricao: 'Arrumar antes da mãe chegar', dataVencimento: '12/03/2024' },
    { id: '98734', titulo: "Arrumar cozinha", descricao: 'Arrumar antes da mãe chegar', dataVencimento: '12/03/2024' }
  ];

  constructor() { }

  list(): Tarefa[] {
    return this.tarefas;
  }

  //método para remover um cliente da lista
  remove(id: string) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      const index = this.tarefas.indexOf(tarefa);
      this.tarefas.splice(index, 1);
    }
  }

  //método para adicionar um cliente na lista
  add(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
    console.log(this.tarefas);
  }




}
//fim classe TarefaService