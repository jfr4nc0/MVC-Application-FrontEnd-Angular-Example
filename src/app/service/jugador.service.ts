import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jugador } from '../model/jugador';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JugadorService {

	private jugadorsUrl: string;

  constructor(private http: HttpClient) {
    this.jugadorsUrl = 'http://localhost:8080/jugadors';
  }

  public findAll(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.jugadorsUrl);
  }

  public save(jugador: Jugador) {
    return this.http.post<Jugador>(this.jugadorsUrl, jugador);
  }
}
