import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public user: any = '';

  public constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.user = this.userService;
  }
}
