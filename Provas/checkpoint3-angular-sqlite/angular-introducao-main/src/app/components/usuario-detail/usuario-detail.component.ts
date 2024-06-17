import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/Usuario';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './usuario-detail.component.html',
  styleUrl: './usuario-detail.component.css'
})
export class UsuarioDetailComponent {
  usuarioForm: FormGroup = new FormGroup({}); //criar um formulário
  usuario?: Usuario;

  //Quando o componente é instanciado, o Angular injeta o serviço UsuarioService
  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private route: ActivatedRoute) {

    this.getUsuarioById();
  }

  getUsuarioById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.usuarioService.getById(id).subscribe((usuario) => (this.usuario = usuario));

    this.usuarioForm = this.formBuilder.group({
      nome: [this.usuario?.nome],
      senha: [this.usuario?.senha],
      id: [this.usuario?.id]
    }); //criar um formulário com os campos nome e senha
  }
  ngOnInit(): void {
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

  update(): void {
    if (this.usuarioForm.valid) {
      const usuarioAdd: Usuario = {
        id: this.usuarioForm.value.id,
        nome: this.usuarioForm.value.nome,
        senha: this.usuarioForm.value.senha
      };

      this.usuarioService.update(usuarioAdd).subscribe();
      alert('Atualizado com sucesso!')
    }
  }
}
