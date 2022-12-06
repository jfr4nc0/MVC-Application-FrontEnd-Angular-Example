import { Component, OnInit } from '@angular/core';
import { Jugador } from '../model/jugador';
import { JugadorService } from '../service/jugador.service';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {

	jugadors: Jugador[] = [];
	
 	constructor(private jugadorService: JugadorService) { }

  	ngOnInit(){
  		this.jugadorService.findAll().subscribe(data => {
  			this.jugadors = data;
  		});
  	}
}
