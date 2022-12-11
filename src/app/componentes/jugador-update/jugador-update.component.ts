import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
	jugador: Jugador = new Jugador();
  
  constructor(private jugadorService: JugadorService,
  	private route: ActivatedRoute,
  	private router: Router) { }

  ngOnInit(): void {
  	this.id = this.route.snapshot.params["id"];
  	
  	this.jugadorService.getJugador(this.id).subscribe(data => {
  		this.jugador = data;
  		}, error => console.log(error));
  }

	onSubmit(){
		this.updateJugador();}
		
	private updateJugador(){
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
}
