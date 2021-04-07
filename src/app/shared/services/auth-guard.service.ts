import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    let value = this.authService.isAuthenticated();
    if (!value) {
      this.router.navigate(['/home']);
    }
    return value;
  }
}
