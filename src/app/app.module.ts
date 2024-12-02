import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SingupComponent } from './singup/singup/singup.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
// import { AngularFireStore,AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { DashboardcomponentComponent } from './dashboardcomponent/dashboardcomponent.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,RouterModule,AppRoutingModule],
  declarations: [AppComponent, SingupComponent, LoginComponent, UsersComponent, DashboardcomponentComponent],
  bootstrap: [AppComponent],
  providers:[]
  
})
export class AppModule {}
