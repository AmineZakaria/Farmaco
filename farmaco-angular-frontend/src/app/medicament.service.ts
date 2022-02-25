import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Medicament } from './medicament';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  private baseURL = "http://localhost:8080/api/v1/medicaments";

  constructor(private httpClient: HttpClient) { }
  
  getMedicamentsList(): Observable<Medicament[]>{
    return this.httpClient.get<Medicament[]>(`${this.baseURL}`);
  }

  createMedicament(medicament: Medicament): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, medicament);
  }

  getMedicamentById(id: number): Observable<Medicament>{
    return this.httpClient.get<Medicament>(`${this.baseURL}/${id}`);
  }

  updateMedicament(id: number, medicament: Medicament): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, medicament);
  }

  deleteMedicament(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
