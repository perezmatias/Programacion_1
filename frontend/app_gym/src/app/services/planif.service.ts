import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanifService {
  private url = '/api';

  constructor(private httpClient: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const auth_token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
  }

  getPlanif(userDNI: number): Observable<any> {
    return this.httpClient.get(`${this.url}/planificacion_a/${userDNI}`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleErrors));
  }

  createPlanif(planificacionData: any): Observable<any> {
    return this.httpClient.post(`${this.url}/planificaciones`, planificacionData, { headers: this.getHeaders() })
      .pipe(catchError(this.handleErrors));
  }

  updatePlanif(id: number, planificacionData: any): Observable<any> {
    return this.httpClient.put(`${this.url}/planificacion/${id}`, planificacionData, { headers: this.getHeaders() })
      .pipe(catchError(this.handleErrors));
  }

  deletePlanif(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/planificacion/${id}`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleErrors));
  }

  private handleErrors(error: any): Observable<never> {
    console.error('Error en la solicitud:', error);
    throw error;
  }
}