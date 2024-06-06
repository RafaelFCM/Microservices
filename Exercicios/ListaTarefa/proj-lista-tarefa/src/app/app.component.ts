import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefaComponent } from "./components/tarefa/tarefa.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TarefaComponent]
})
export class AppComponent {
  title = 'proj-lista-tarefa';
}
