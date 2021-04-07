import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public userName: string = '';

  public constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  public ngOnInit(): void {
    console.log(this.authService.isAuthenticated());
    this.userName = this.userService.getUser().name;
  }
}
