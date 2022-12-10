import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/service/jugador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {

	jugadores!: Jugador[];
	jugadoresLength!: number;
	
 	constructor(private jugadorService: JugadorService) { }

  	ngOnInit(): void{
  		this.getJugadores();
  	}
  	
  	private getJugadores(){
  		this.jugadorService.getJugadorList().subscribe(data => {
  			this.jugadores = data;
  		});
	}
  	
  	deleteJugador(id: number){
  		this.jugadorService.deleteJugador(id).subscribe(data => {
  			console.log(data);
  			this.ngOnInit();
		})
  			Swal.fire("Jugador Eliminado")
  			.then((value) => location.reload());
  	}
  	
  	updateJugador(id: number, jugador: Jugador){
  		this.jugadorService.updateJugador(id,jugador).subscribe(data => {
  			this.jugadores =data;
  			});
  		}
  		
	i!: number;
	arqueros!: number;
  	cantArqueros(){
		this.i = 0;
		this.arqueros = 0;  	
  		while(this.i<this.jugadoresLength){
  			if(this.jugadores[this.i].posicion.match("Arquero"))
  				this.arqueros++;
			this.i++;  			
		}
	}

	camisetas!: string[];
	arrayCamisetas() {
		this.i=0;
		this.camisetas = [];
		while(this.i<this.jugadoresLength){
			this.camisetas.push(this.jugadores[this.i].camiseta);
			this.i++;
			}
		}

	camisetaDuplicada(): boolean {
		this.arrayCamisetas();
		return new Set(this.camisetas).size < this.camisetas.length;
		}
	
  	controlListaDef(){
  		// Control cantidad de Jugadores
  		this.jugadoresLength = this.jugadores.length;
  		if(this.jugadoresLength > 23){
  			Swal.fire("La lista Definitiva debe tener menos de 23 jugadores")
  			.then(() => location.reload());
  			}
  		// Control numero de Arqueros
		this.cantArqueros();
		if(this.arqueros < 2){
			Swal.fire("La lista Definitiva debe 2 o más Arqueros")
  			.then(() => location.reload());
  			}
  		// Control numeros de camisetas
  		if(this.camisetaDuplicada()){
  			Swal.fire("Los numeros de camiseta no se pueden repetir")
  			.then(() => location.reload());
  			}
		}
  	}
