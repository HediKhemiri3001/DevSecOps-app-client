import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  constructor(private http: HttpClient) {}
  postEquipment(data: any) {
    return this.http.post<any>(API_URL + '/equipment/', data);
  }
  getEquipment() {
    return this.http.get<any>(API_URL + '/equipment/');
  }
  putEquipment(data: any, id: string) {
    return this.http.put<any>(API_URL + '/equipment/' + id, data);
  }
  patchEquipment(data: any, id: string) {
    return this.http.patch<any>(API_URL + '/equipment/' + id, data);
  }
  deleteEquipment(id: string) {
    return this.http.delete<any>(API_URL + '/equipment/' + id);
  }
  filterEquipment(keyword: string) {
    return this.http.get<any>(API_URL + '/equipment/filter/' + keyword);
  }
}
