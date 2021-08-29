import { Component, OnInit, Input } from '@angular/core';
import { Event } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { MatDialog } from '@angular/material';
import { UpdateEventComponent } from './update-event/update-event.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input()event: Event;

  constructor(private eventService: EventService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  openEditEvent() {
    this.dialog.open(UpdateEventComponent, {
      data: { userInfo: this.eventService.currentEvent }
    });
  }

}
