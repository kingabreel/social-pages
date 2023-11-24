import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(usernameOrEmail: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { usernameOrEmail, password }, { responseType: 'text' })
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
