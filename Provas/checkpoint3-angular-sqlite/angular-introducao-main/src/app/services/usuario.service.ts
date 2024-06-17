import { Injectable } from '@angular/core'; //importar o decorator Injectable
import { Usuario } from '../interfaces/Usuario'; //injetar a interface Usuario
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

//Importante notar que este decorator torna a classe injetável
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiUrl = 'http://localhost:5281/Usuario'; //URL da API

  // Criar uma lista de clientes
  // clientes: Usuario[] = [
  //   { id: "dfafs", nome: 'John Doe', telefone: '123456789'},
  //   { id: "ddsaf", nome: 'Jane Smith'}
  // ];

  constructor(private http: HttpClient) { 
  }

  //método para retornar a lista de clientes
  list(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl) as Observable<Usuario[]>;
  }

  getById(id: string): Observable<Usuario> {
    console.log(`${this.apiUrl}/${id}`);
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`) as Observable<Usuario>;
  }

  //método para remover um usuario da lista
  remove(id:string) {
    // const usuario = this.clientes.find(c => c.id === id);
    //if (usuario) {
      console.log(`${this.apiUrl}/${id}`)
      return this.http.delete(`${this.apiUrl}/${id}`);
      // const index = this.clientes.indexOf(usuario);
      // this.clientes.splice(index, 1);
    //}
  }

  //método para adicionar um usuario na lista
  add(usuario: Usuario) {
    const httpHeaders = 
    {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.post(this.apiUrl, usuario, httpHeaders);
    //this.clientes.push(usuario);
    //console.log(this.clientes);
  }

  update(usuario: Usuario) {
    const httpHeaders = 
    {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    console.log(usuario)
    console.log(`${this.apiUrl}/${usuario.id}`)
    return this.http.put(`${this.apiUrl}/${usuario.id}`, usuario, httpHeaders);
  }
  
 
}
