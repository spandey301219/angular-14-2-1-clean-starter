import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { LoginComponent } from "./login/login.component";
import { SingupComponent } from "./singup/singup/singup.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardcomponentComponent } from "./dashboardcomponent/dashboardcomponent.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
    { path: 'users', component: UsersComponent,canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SingupComponent },
    { path: 'dashboard', component: DashboardcomponentComponent,canActivate:[AuthGuard] }
]

@NgModule({
    imports: [BrowserModule,RouterModule.forRoot(routes)],
    // exports: [RouterModule]
})
export class AppRoutingModule {
}