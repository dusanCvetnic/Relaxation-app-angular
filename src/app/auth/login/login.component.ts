import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorExists = false;
  errorText = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;
    let user = this.userService.getUser(email);
    if (!user) {
      this.errorExists = true;
      this.errorText = 'There is no registered account with email: ' + email;
      return;
    }
    const isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = 'Password is not correct';
      return;
    }
    this.errorExists = false;
    this.userService.currentUser = user;
    console.log(this.userService.currentUser);
    this.router.navigate(['profile']);
  }

}
