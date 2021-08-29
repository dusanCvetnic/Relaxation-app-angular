import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-next-event',
  templateUrl: './next-event.component.html',
  styleUrls: ['./next-event.component.css']
})
export class NextEventComponent implements OnInit {
  isJoined=false;
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  joinEvent(){
    this.isJoined = true;
  }
}
