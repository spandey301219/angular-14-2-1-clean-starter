import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './authService';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: string | null;
  form:any = this.formBuilder.group({
    test: ['test'],
  });
  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router: Router) {
    this.user = this.authService.getLoggedInUser();
  }

  ngOnInit() {
    console.log(this.form.value);
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
