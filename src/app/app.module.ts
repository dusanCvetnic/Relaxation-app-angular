import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { FinishedEventComponent } from './events/finished-event/finished-event.component';
import { NextEventComponent } from './events/next-event/next-event.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserService } from './services/user.service';
import { UpdateProfileComponent } from './auth/profile/update-profile/update-profile.component';
import { UpdateEventComponent } from './events/event/update-event/update-event.component';
import { HeaderComponent } from './header/header.component';
import { EventService } from './services/event.service';
import { AddEventComponent } from './event/add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    EventsComponent,
    EventComponent,
    FinishedEventComponent,
    NextEventComponent,
    WelcomeComponent,
    UpdateProfileComponent,
    UpdateEventComponent,
    HeaderComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, EventService],
  bootstrap: [AppComponent],
  entryComponents: [UpdateProfileComponent, UpdateEventComponent]
})
export class AppModule { }
