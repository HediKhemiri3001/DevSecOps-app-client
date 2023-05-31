import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  filter(filterValue: string): Observable<any> {
    return this.http.get<any>(API_URL + '/project/filter/' + filterValue);
  }
  constructor(private http: HttpClient) {}
  postProject(data: any) {
    return this.http.post<any>(API_URL + '/project/', data);
  }
  getProjects() {
    return this.http.get<any>(API_URL + '/project/');
  }
  putProject(data: any, id: string) {
    return this.http.put<any>(API_URL + '/project/' + id, data);
  }
  deleteProject(id: string) {
    return this.http.delete<any>(API_URL + '/project/' + id);
  }
  getProjectManager(id: string) {
    return this.http.get<any>(API_URL + '/project/manager/' + id);
  }
  getProjectMembers(id: string) {
    return this.http.get<any>(API_URL + '/project/members/' + id);
  }
  addProjectMember(id: string, userId: string | string[]) {
    return this.http.patch<any>(
      API_URL + '/project/members/' + id,
      typeof userId == typeof ''
        ? {
            memberId: userId,
          }
        : { memberIds: userId }
    );
  }
  getProjectEquipment(id: string) {
    return this.http.get<any>(API_URL + '/equipment/project/' + id);
  }
  removeProjectEquipment(projectId: string, equipmentId: string) {
    return this.http.patch<any>(API_URL + '/project/equipment/' + projectId, {
      equipmentId: equipmentId,
    });
  }
}
