import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public name: string = '';
  public password: string = '';
  public wrongCombination: boolean = false;

  constructor() {}

  public login(): void {
    if (this.name.split('').reverse().join('') !== this.password) {
      this.wrongCombination = true;
    }
  }

  public hideWarning(): void {
    this.wrongCombination = false;
  }
}
