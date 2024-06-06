import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service'; //importar o serviço tarefaService
import { Tarefa } from '../../interfaces/Tarefa';
import { CommonModule } from '@angular/common'; //importar o módulo CommonModule para 
import { FormGroup } from '@angular/forms'; //importar o módulo FormGroup para criar um formulário
import { FormBuilder, Validators } from '@angular/forms';  //importar o módulo FormBuilder para criar um formulário
import { ReactiveFormsModule } from '@angular/forms'; //importar o módulo ReactiveFormsModule para criar um formulário

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})

export class TarefaComponent {

  tarefaForm: FormGroup = new FormGroup({}); //criar um formulário
  tarefas: Tarefa[] = []; //criar uma lista de tarefas

  //Quando o componente é instanciado, o Angular injeta o serviço tarefaService
  constructor(private tarefaService: TarefaService, private formBuilder: FormBuilder) {
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      dataVencimento: ['', Validators.required]
    }); //criar um formulário com os campos nome e telefone
  }

  //método para gerar uma string aleatória
  generateRandomString(length: number): string {
    const characters = '0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  //inserir tarefa
  insert() {
    if (this.tarefaForm.valid) {
      const tarefaAdd: Tarefa = {
        id: this.generateRandomString(5),
        titulo: this.tarefaForm.value.titulo,
        descricao: this.tarefaForm.value.descricao,
        dataVencimento: this.tarefaForm.value.dataVencimento
      };
      this.tarefaForm.reset();
      this.tarefaService.add(tarefaAdd);
      console.log(this.tarefaForm.value);
    }
  }

  //método para listar os tarefa
  list(): void {
    this.tarefas = this.tarefaService.list();
  }

  //método para remover um tarefa
  ngOnInit(): void {
    this.list();
  }

  //método para remover um tarefa
  remover(id: string): void {
    this.tarefaService.remove(id);
  }


}
//fim Classe TarefaComponent