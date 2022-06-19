import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemonList():Observable<any>{
    return this.http.get("/pokedex-api/pokemon/?userId="+ localStorage.getItem("userId"));
  }
}
