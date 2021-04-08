import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.userName = this.userService.getUser().name;
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
