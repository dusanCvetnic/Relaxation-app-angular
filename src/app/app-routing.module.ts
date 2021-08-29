import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './event/add-event/add-event.component';


const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo: 'welcome' },
  { path : 'welcome', component: WelcomeComponent },
  { path : 'signup', component: SignupComponent },
  { path : 'login', component: LoginComponent },
  { path : 'profile', component: ProfileComponent },
  { path : 'events', component: EventsComponent },
  { path : 'event', component: AddEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
