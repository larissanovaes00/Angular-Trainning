import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Users } from '../models/users/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API = 'https://api.github.com/orgs/angular/public_members'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Users[]>(this.API).pipe(take(1))
  }
}
