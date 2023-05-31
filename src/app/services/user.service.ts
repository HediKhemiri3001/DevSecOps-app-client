import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { environment } from 'src/environments/environment.prod';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}
  headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenStorage.getToken()}`,
    });
  }
  postUser(data: any) {
    return this.http.post<any>(API_URL + '/users/', data, {
      headers: this.headers(),
    });
  }
  getUsers() {
    return this.http.get<any>(API_URL + '/users/', {
      headers: this.headers(),
    });
  }
  putUser(data: any, id: string) {
    return this.http.put<any>(API_URL + '/users/' + id, data, {
      headers: this.headers(),
    });
  }
  patchUser(data: any, id: string) {
    return this.http.patch<any>(API_URL + '/users/' + id, data, {
      headers: this.headers(),
    });
  }
  deleteUser(id: string) {
    return this.http.delete<any>(API_URL + '/users/' + id, {
      headers: this.headers(),
    });
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + '/users/all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + '/users/user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + '/users/mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + '/users/admin', { responseType: 'text' });
  }
  resetPassword(id: string, data: any): Observable<any> {
    return this.http.patch(API_URL + '/users/password/' + id, data, {
      headers: this.headers(),
    });
  }
  changeUsername(id: string, username: string): Observable<any> {
    return this.http.patch(
      API_URL + '/users/username/' + id,
      { username: username },
      {
        headers: this.headers(),
      }
    );
  }
  getEquipsOfUser(id: string): Observable<any> {
    return this.http.get(API_URL + '/users/equipments/' + id);
  }
  getManagedProjects(id: string): Observable<any> {
    return this.http.get(API_URL + '/users/projects/managed/' + id);
  }
  getMemberProjects(id: string): Observable<any> {
    return this.http.get(API_URL + '/users/projects/member/' + id);
  }
  filter(keyword: string): Observable<any> {
    return this.http.get(API_URL + '/users/filter/' + keyword);
  }
}
