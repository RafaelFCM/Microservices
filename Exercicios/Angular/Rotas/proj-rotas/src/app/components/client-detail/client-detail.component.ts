import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})

export class ClientDetailComponent {
  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {
    this.getClientById();
  }

  getClientById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)

  }
}
