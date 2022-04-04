import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationUsersService {
  private users: any = [];

  addUser(obj: object) {
    this.users.push(obj)
  }

  getUsers() {
    return this.users
  }
 
}
