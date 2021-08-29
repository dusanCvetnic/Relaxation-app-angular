import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-finished-event',
  templateUrl: './finished-event.component.html',
  styleUrls: ['./finished-event.component.css']
})
export class FinishedEventComponent implements OnInit {
  isRating = false;
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  openSlider(){
    this.isRating = true;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
