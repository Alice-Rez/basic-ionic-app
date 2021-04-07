import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public name: string = '';
  public password: string = '';
  public wrongCombination: boolean = false;

  public constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  public login(): void {
    if (this.name.split('').reverse().join('') !== this.password) {
      this.wrongCombination = true;
    } else {
      this.userService.name = this.name;
      this.authService.login();
      this.router.navigate([`/dashboard/:${this.name}`]);
    }
  }

  public hideWarning(): void {
    this.wrongCombination = false;
  }
}
