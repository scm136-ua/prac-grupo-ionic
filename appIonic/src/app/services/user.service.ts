import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersMockup = './assets/data/users.json';
  users: User[] = [];

  constructor() {
    fetch(this.usersMockup)
      .then(res => res.json())
      .then((data: User[]) => {
        this.users = data;
      });
  }

  login(email: string, password: string): User | null {
    for (const u of this.users) {
      if (u.email === email && u.password === password) {
        return u;
      }
    }
    return null;
  }
}
