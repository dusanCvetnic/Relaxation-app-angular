import { Component, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RelaxApp';

  constructor(private userService: UserService, private router: Router) {

  }

  logOut(){
    this.userService.currentUser = null;
    this.router.navigate(['login']);
  }

}
