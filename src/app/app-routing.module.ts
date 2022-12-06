import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorFormComponent } from './jugador-form/jugador-form.component';
import { JugadorListComponent } from './jugador-list/jugador-list.component';

const routes: Routes = [
	{ path: 'jugadores', component: JugadorListComponent},
	{ path: 'addjugador', component: JugadorFormComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
