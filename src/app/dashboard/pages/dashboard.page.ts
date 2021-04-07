import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('name').split(':')[1];
  }
}
