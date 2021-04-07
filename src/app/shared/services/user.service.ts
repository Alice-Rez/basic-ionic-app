import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _name: string | null = null;

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}
