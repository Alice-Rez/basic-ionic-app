import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  public login(): void {
    if (this.name.split('').reverse().join('') !== this.password) {
      this.wrongCombination = true;
    } else {
      this.userService.name = this.name;
      this.router.navigate([`/dashboard/:${this.name}`]);
    }
  }

  public hideWarning(): void {
    this.wrongCombination = false;
  }
}
