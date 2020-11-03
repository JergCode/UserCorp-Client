import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];
  URL = environment.SERVICE_URL;

  constructor(private http: HttpClient) {}

  createUser(user: User): Promise<User> {
    return this.http
      .post<User>(this.URL, { ...user })
      .toPromise();
  }

  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.URL).toPromise();
  }

  getUserById(id: string): Promise<User> {
    return this.http.get<User>(`${this.URL}/${id}`).toPromise();
  }

  editUser(user: User): void {
    this.http
      .put<User>(this.URL, { ...user })
      .toPromise();
  }

  async deleteUser(id: number): Promise<void> {
    await this.http.delete(`${this.URL}/${id}`).toPromise();
  }
}
