import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAlunoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createAluno(aluno: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, aluno).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  updateAluno(id: number, aluno: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, aluno).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  deleteAluno(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
