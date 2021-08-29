import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private eventService: EventService,
  private dialogRef: MatDialogRef<UpdateEventComponent>) { }

  eventInfo = this.data.eventInfo;

  ngOnInit() {
  }

  updateEvent() {
    this.dialogRef.close();
  }

}
