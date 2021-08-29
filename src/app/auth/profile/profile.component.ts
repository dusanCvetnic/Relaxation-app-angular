import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
  }
  openEditProfile() {
    this.dialog.open(UpdateProfileComponent, {
      data: { userInfo: this.userService.currentUser }
    });
  }

}
