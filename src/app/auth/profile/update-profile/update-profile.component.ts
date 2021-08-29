import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private userService: UserService,
  private dialogRef: MatDialogRef<UpdateProfileComponent>) { }

  userInfo = this.data.userInfo;

  ngOnInit() {
    console.log(this.userInfo);
  }

  updateUser() {
    this.dialogRef.close();
  }

}
