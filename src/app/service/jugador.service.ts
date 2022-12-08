import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jugador } from '../model/jugador';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JugadorService {

	private jugadoresUrl = 'http://localhost:8080/jugadores';
	
	constructor(private http: HttpClient) {}
	
	public findAll(): Observable<Jugador[]> {
		return this.http.get<Jugador[]>(this.jugadoresUrl);
	}
	
	public getJugadorList(): Observable<Jugador[]> {
		return this.http.get<Jugador[]>(this.jugadoresUrl);
	}
	
	public addJugador(jugador: Jugador) {
		return this.http.post<Jugador>(this.jugadoresUrl, jugador);
	}
	  
	public updateJugador(id: number, jugador: Jugador): Observable<any>{
		return this.http.put(this.jugadoresUrl+'/'+id,JSON.stringify(jugador))};
		
	public deleteJugador(id: number){
		return this.http.delete(this.jugadoresUrl+'/'+id)}; 
  
}
