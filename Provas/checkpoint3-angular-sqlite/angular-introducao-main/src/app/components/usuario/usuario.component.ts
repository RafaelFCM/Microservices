import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'; //importar o serviço UsuarioService
import { Usuario } from '../../interfaces/Usuario'; //importar a interface Usuario
import { CommonModule } from '@angular/common'; //importar o módulo CommonModule para 
import { FormGroup } from '@angular/forms'; //importar o módulo FormGroup para criar um formulário
import { FormBuilder, Validators } from '@angular/forms';  //importar o módulo FormBuilder para criar um formulário
import { ReactiveFormsModule } from '@angular/forms'; //importar o módulo ReactiveFormsModule para criar um formulário

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  usuarioForm: FormGroup = new FormGroup({}); //criar um formulário
  usuarios: Usuario[] = []; //criar uma lista de usuarios

  //Quando o componente é instanciado, o Angular injeta o serviço UsuarioService
  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    }); //criar um formulário com os campos nome e senha
  }

  //método para gerar uma string aleatória
  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  //inserir usuario
  insert() {
    if (this.usuarioForm.valid) {
      const usuarioAdd: Usuario = {
        id: this.generateRandomString(5),
        nome: this.usuarioForm.value.nome,
        senha: this.usuarioForm.value.senha
      };
      this.usuarios.push(usuarioAdd); //adicionar um usuario na lista
      this.usuarioForm.reset();
      this.usuarioService.add(usuarioAdd).subscribe(); //adicionar um usuario no servidor
      alert('Inserido com sucesso!')
    }
  }

  //método para listar os usuarios
  /**
   * Retrieves a list of clients from the server and assigns it to the 'usuarios' property.
   */
  list(): void {
    //retorna uma lista de usuarios do servidor e atribui à propriedade 'usuarios'
     this.usuarioService.list().subscribe((usuarios) => (this.usuarios = usuarios));
  }

  //método para remover um usuario
  ngOnInit(): void {
    this.list();
  }

  //método para remover um usuario
  remover(id: string): void {
    this.usuarios = this.usuarios.filter((c) => c.id !== id);
    this.usuarioService.remove(id).subscribe();
    alert('Removido com sucesso!')
  }
}
