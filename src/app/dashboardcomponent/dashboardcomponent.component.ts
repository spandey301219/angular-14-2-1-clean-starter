import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardcomponent',
  templateUrl: './dashboardcomponent.component.html',
  styleUrls: ['./dashboardcomponent.component.css']
})
export class DashboardcomponentComponent implements OnInit {
user
  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.getLoggedInUser();
  }

  ngOnInit(): void {
  }

}
