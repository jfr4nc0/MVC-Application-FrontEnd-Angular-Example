import { Component, OnInit } from '@angular/core';
import { Jugador } from '../model/jugador';
import { JugadorService } from '../service/jugador.service';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {

	jugadores!: Jugador[];
	
 	constructor(private jugadorService: JugadorService) { }

  	ngOnInit(){
  		this.jugadorService.getJugadorList().subscribe(data => {
  			this.jugadores = data;
  		});
  	}
}
