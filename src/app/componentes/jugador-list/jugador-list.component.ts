import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/service/jugador.service';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {

	jugadores!: Jugador[];
	
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
  	}
  	
  	updateJugador(id: number, jugador: Jugador){
  		this.jugadorService.updateJugador(id,jugador).subscribe(data => {
  			this.jugadores =data;
  			});
  		}
}
