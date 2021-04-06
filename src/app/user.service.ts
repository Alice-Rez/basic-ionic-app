import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userName: string = '';

  public constructor() {}

  public setName(name: string): void {
    this.userName = name;
  }

  public getName(): string {
    return this.userName;
  }
}
