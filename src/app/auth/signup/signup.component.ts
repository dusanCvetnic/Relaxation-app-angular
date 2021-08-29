import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorExists = false;
  errorText = '';
  signupComplete = false;
  selSport = false;
  selFun = false;
  selMusic = false;
  selMovie = false;
  selCulture = false;

  selArr: string[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!this.userService.getUser(form.value.email)) {
      this.errorExists = false;
      let newUser = this.userService.registerUser(form.value.email,
                                                  form.value.password,
                                                  form.value.name,
                                                  form.value.surname,
                                                  form.value.birthDate,
                                                  form.value.address,
                                                  form.value.interests
                                                  );


      this.router.navigate(['login']);
    } else {
      this.errorExists = true;
      this.errorText = 'Korisnik s ovim id-em postoji';
    }
    console.log(form);
  }


}
