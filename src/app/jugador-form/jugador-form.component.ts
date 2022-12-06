import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from '../model/jugador';
import { JugadorService } from '../service/jugador.service';

@Component({
  selector: 'app-jugador-form',
  templateUrl: './jugador-form.component.html',
  styleUrls: ['./jugador-form.component.css']
})
export class JugadorFormComponent {

	jugador: Jugador;
	
  constructor(
  	private route: ActivatedRoute,
  		private router: Router,
  			private jugadorService: JugadorService) {
  				this.jugador = new Jugador();
  				}

	onSubmit(){
		this.jugadorService.save(this.jugador).subscribe(result => this.gotoJugadorList());
		}
		
	gotoJugadorList() {
		this.router.navigate(['/jugadors']);
		}
}
