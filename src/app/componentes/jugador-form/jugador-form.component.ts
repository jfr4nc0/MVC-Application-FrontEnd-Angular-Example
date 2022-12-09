import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/service/jugador.service';

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
		this.addJugador();
		}
		
	private addJugador(){
		this.jugadorService.addJugador(this.jugador).subscribe(result => this.gotoJugadorList());
		}
	
	gotoJugadorList() {
		this.router.navigate(['/jugadores']);
		}
		
	// Seleccion multiple de posiciones
	listaPosiciones: any[] =[];
	configPosiciones:IDropdownSettings={};
	
	ngOnInit(){
		this.listaPosiciones=[
			{id: 1, posicion: "Arquero"},
			{id: 2, posicion: "Defensor"},
			{id: 3, posicion: "Volante"},
			{id: 4, posicion: "Delantero"}
			];
		this.configPosiciones = {
			idField: "id",
			textField: "posicion",
			};
		}
}
