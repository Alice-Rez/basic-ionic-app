import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public user: User | null = null;
  public password: string = '';
  public wrongCombination: boolean = false;

  public constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  public ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  public login(): void {
    if (this.user.name.split('').reverse().join('') !== this.password) {
      this.wrongCombination = true;
    } else {
      this.authService.login();
      this.router.navigate([`/dashboard`]);
    }
  }

  public hideWarning(): void {
    this.wrongCombination = false;
  }
}
