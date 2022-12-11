import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/service/jugador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jugador-update',
  templateUrl: './jugador-update.component.html',
  styleUrls: ['./jugador-update.component.css']
})
export class JugadorUpdateComponent implements OnInit {

	id!: number;
	jugador: Jugador;
  
  constructor(
  	private jugadorService: JugadorService,
  	private route: ActivatedRoute,
  	private router: Router) {
  		this.jugador = new Jugador(); 
  		}

	onSubmit(){
		this.updateJugador();}
		
	private updateJugador(){
		this.controlPosiciones();
		this.jugadorService.updateJugador
		(this.id,this.jugador)
		.subscribe(() => {
			Swal.fire("Modificacion Exitosa!")
			.then(() => this.goToListaJugadores());
		}, error => console.log(error));
	}
	
    goToListaJugadores() {
        this.router.navigate(["/jugadores"]);
    }  	
  	
    // Seleccion multiple de posiciones
	listaPosiciones: any[] =[];
	configPosiciones:IDropdownSettings={};

  ngOnInit(): void {
  	this.id = this.route.snapshot.params["id"];
  	
  	this.jugadorService.getJugador(this.id).subscribe(data => {
  		this.jugador = data;
  		}, error => console.log(error));
  	
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
		while(this.i < this.selectedPosiciones.length)
		{
			this.posiciones.push(this.selectedPosiciones[this.i].posicion)
			this.i++;
		}
		this.jugador.posicion = this.posiciones.join(', ');
        }
}
    
	
