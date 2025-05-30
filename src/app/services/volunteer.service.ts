import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  // Função para obter a lista de voluntários
  getVolunteers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/volunteers`);
  }

  // Função para adicionar um novo voluntário
  addVolunteer(name: string, email: string, interestArea: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/volunteers`, { name, email, interestArea });
  }

  // Função para editar um voluntário
  editVolunteer(id: string, name: string, email: string, interestArea: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/volunteers/${id}`, { name, email, interestArea });
  }
  
  // Função para excluir um voluntário
  deleteVolunteer(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/volunteers/${id}`);
  }
}
