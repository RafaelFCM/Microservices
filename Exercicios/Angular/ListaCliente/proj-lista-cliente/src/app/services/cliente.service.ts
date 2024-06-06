import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  // Criar uma lista de clientes
  clientes: Cliente[] = [
    { id: "09324", nome: 'John Doe', telefone: '123456789' },
    { id: "90324", nome: 'Jane Smith' }
  ];

  constructor() {
  }

  //método para retornar a lista de clientes
  list(): Cliente[] {
    return this.clientes;
  }

  //método para remover um cliente da lista
  remove(id: string) {
    const cliente = this.clientes.find(c => c.id === id);
    if (cliente) {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);
    }
  }

  //método para adicionar um cliente na lista
  add(cliente: Cliente) {
    this.clientes.push(cliente);
    console.log(this.clientes);
  }


}
//fim classe ClienteService