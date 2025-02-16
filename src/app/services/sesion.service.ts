import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  private readonly USERS_KEY = 'usersDB';
  private readonly TOKEN_KEY = 'authToken';
  private readonly USER_KEY = 'authUser';

  constructor(private router: Router) { }


  register(username: string, email: string, password: string): boolean {
    let users = this.getUsers();
    if (users.some(user => atob(user.email) === email)) {
      return false;
    }
    const newUser = {
      username: btoa(username),
      email: btoa(email),
      password: btoa(password),
    };

    users.push(newUser);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    let users = this.getUsers();

    const foundUser = users.find(
      user => atob(user.email) === email && atob(user.password) === password
    );

    if (foundUser) {
      const authUser = { username: atob(foundUser.username), email };
      localStorage.setItem(this.TOKEN_KEY, 'mock-jwt-token');
      localStorage.setItem(this.USER_KEY, JSON.stringify(authUser));
      return true;
    }

    return false;
  }

  private getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
  }

  getUser(): any {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }


  isAuthenticated(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['/login']);
  }
}