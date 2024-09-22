import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../interfaces/Contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private apiUrl = 'http://localhost:3000/contatos'

  constructor(private http: HttpClient) { }
  
  getContatos() : Observable<Contato[]>{
    return this.http.get<Contato[]>(this.apiUrl);
  }
  
  addContato(contato: Contato) :  Observable<Contato>{
    return this.http.post<Contato>(this.apiUrl, contato);
  }

  updateContato(contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.apiUrl}/${contato.id}`, contato);
  }

  deleteContato(contato: Contato): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${contato.id}`);
  }
}
