import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: boolean = false;

  public login(): void {
    this.isLogged = true;
  }

  public logout(): void {
    this.isLogged = false;
  }

  public isAuthenticated(): boolean {
    return this.isLogged;
  }
}
