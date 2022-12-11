import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorFormComponent } from './componentes/jugador-form/jugador-form.component';
import { JugadorListComponent } from './componentes/jugador-list/jugador-list.component';
import { JugadorUpdateComponent } from './componentes/jugador-update/jugador-update.component';

const routes: Routes = [
	{ path: 'jugadores', component: JugadorListComponent},
	{ path: 'addjugador', component: JugadorFormComponent},
	{ path: 'jugador-update/:id', component: JugadorUpdateComponent},
	{ path: '', redirectTo: 'jugadores', pathMatch: 'full'}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
