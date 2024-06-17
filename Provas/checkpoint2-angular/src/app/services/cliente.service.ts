import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor() { }

  clientes:Cliente[] = [
    {id: "kaoefaeafoidjadsoj", nome:"Volta Sidnei", telefone: "(11) 97117-7822"},
    {id: "sadlkasdmqmwklemqa", nome:"Por favor"},
  ]

  listar():Cliente[]{
    return this.clientes;
  }

  remover(id:string){
    const cliente = this.clientes.find(c => c.id == id);

    if(cliente){
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index,1);
    }

  }

  adicionar(cliente:Cliente){
    //espera um objeto do tipo cliente, no parametro, entao precisa montar esse objeto
    this.clientes.push(cliente);
  }

}
