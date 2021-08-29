import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  errorExists = false;
  errorText = '';

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

      this.errorExists = false;
      let newUser = this.eventService.registerEvent(form.value.ime,
                                                  form.value.adresa,
                                                  form.value.kategorija,
                                                  form.value.opis,
                                                  form.value.pocetak,
                                                  form.value.kraj,
                                                  form.value.ucesnici,
                                                  form.value.status
                                                  );


      this.router.navigate(['events']);

    console.log(form);
  }

}
