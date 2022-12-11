import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/service/jugador.service';
import Swal from 'sweetalert2';

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
		this.controlPosiciones();
		this.jugadorService.addJugador(this.jugador)
		.subscribe(() => {
			Swal.fire("Carga Exitosa!")
			.then(() => this.goToListaJugadores());
			}, error => console.log(error));
		}
	
	goToListaJugadores() {
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

	onItemSelect(item: any){
		console.log('onItemSelect',item);
	}
	
	json: any;
	selectedPosiciones: any;
	i: number = 0;
	posiciones: string[] = [];
	controlPosiciones(){
//		this.json = JSON.stringify(this.selectedPosiciones);
//		console.log("Json string: ",this.json);
//		console.log("Json parsed: ",this.selectedPosiciones);
		while(this.i < this.selectedPosiciones.length)
		{
			//this.posiciones.concat(this.selectedPosiciones[this.i].posicion+',');
			this.posiciones.push(this.selectedPosiciones[this.i].posicion)
			this.i++;
		}
		this.jugador.posicion = this.posiciones.join(', ');
		//console.log(this.jugador.posicion);
        }
}
