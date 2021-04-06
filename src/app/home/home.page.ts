import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public name: string = '';
  public password: string = '';
  public wrongCombination: boolean = false;

  public constructor(private userService: UserService) {}

  public login(): void {
    if (this.name.split('').reverse().join('') !== this.password) {
      this.wrongCombination = true;
    }
  }

  public hideWarning(): void {
    this.wrongCombination = false;
  }
}
