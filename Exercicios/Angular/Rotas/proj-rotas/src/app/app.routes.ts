import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotasComponent } from './components/rotas/rotas.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClienteComponent } from "./components/cliente/cliente.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nova-rota', component: RotasComponent },
    { path: 'cliente', component: ClienteComponent }, //novo component
    { path: 'cliente/:id', component: ClientDetailComponent }, //novo component
    { path: '**', component: HomeComponent } /*Qualquer rota não encontrada será redirecionado para home */
];

