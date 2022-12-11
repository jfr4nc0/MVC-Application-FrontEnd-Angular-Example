import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/service/jugador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jugador-detalle',
  templateUrl: './jugador-detalle.component.html',
  styleUrls: ['./jugador-detalle.component.css']
})
export class JugadorDetalleComponent implements OnInit {

	@Input() viewMode = false;
	
	@Input() jugadorSeleccionado: Jugador = {
        id: 0,
        nombre: '',
        apellido: '',
        edad: '',
        equipo: '',
        posicion: '',
        camiseta: '',
        form: undefined
    }
	
  constructor(
  	private jugadorService: JugadorService,
  	private route: ActivatedRoute,
  	private router: Router) { }

  ngOnInit(): void {
  	if(!this.viewMode){
  		this.getJugador(this.route.snapshot.params["id"]);
  		}
  }
  
  getJugador(id: number): void {
  	this.jugadorService.getJugador(id);
  	}

	onSubmit(){
	this.updateJugador();
	}

	private updateJugador(){
		this.jugadorService.updateJugador
		(this.jugadorSeleccionado.id,this.jugadorSeleccionado)
		.subscribe({
			next: (value) => {
				console.log(value);
				Swal.fire("Modificacion exitosa!")}});
		}

}
