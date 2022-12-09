import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorFormComponent } from './componentes/jugador-form/jugador-form.component';
import { JugadorListComponent } from './componentes/jugador-list/jugador-list.component';

const routes: Routes = [
	{ path: 'jugadores', component: JugadorListComponent},
	{ path: 'addjugador', component: JugadorFormComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
