import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable()
export class EventService {

  static dummyEventListActive: Array<Event> = [
    {
      id: 1,
      ime: 'Event 1',
      adresa: 'Adresa 1',
      kategorija: 'sport',
      opis: 'Opis 1',
      pocetak: new Date('2020-01-31 09:00'),
      kraj: new Date('2020-01-31 18:00'),
      ucesnici: '1500',
      status: 'rezervisan'
    },
    {
      id: 2,
      ime: 'Event 2',
      adresa: 'Adresa 2',
      kategorija: 'music',
      opis: 'Opis 2',
      pocetak: new Date('2020-02-14 09:00'),
      kraj: new Date('2020-02-15 18:00'),
      ucesnici: '150',
      status: 'rezervisan'
    },
    {
      id: 3,
      ime: 'Event 3',
      adresa: 'Adresa 3',
      kategorija: 'culture',
      opis: 'Opis 3',
      pocetak: new Date('2020-03-14 09:00'),
      kraj: new Date('2020-04-15 18:00'),
      ucesnici: '100',
      status: 'rezervisan'
    },
  ];

  static dummyEventListFinished: Array<Event> = [
    {
      id: 1,
      ime: 'Event 4',
      adresa: 'Adresa 4',
      kategorija: 'fun',
      opis: 'Opis 1',
      pocetak: new Date('2020-01-19 09:00'),
      kraj: new Date('2020-01-20 18:00'),
      ucesnici: '1500',
      status: 'zavrsen'
    },
    {
      id: 2,
      ime: 'Event 5',
      adresa: 'Adresa 5',
      kategorija: 'movie',
      opis: 'Opis 2',
      pocetak: new Date('2020-01-01 09:00'),
      kraj: new Date('2020-01-01 18:00'),
      ucesnici: '150',
      status: 'zavrsen'
    },
    {
      id: 3,
      ime: 'Event 6',
      adresa: 'Adresa 6',
      kategorija: 'culture',
      opis: 'Opis 3',
      pocetak: new Date('2020-01-14 09:00'),
      kraj: new Date('2020-01-15 18:00'),
      ucesnici: '100',
      status: 'zavrsen'
    },
  ];

  currentEvent = EventService.dummyEventListActive[0];

  private eventsActive: Event[];
  private eventsFinished: Event[];

  getEventActive() {
    this.eventsActive = EventService.dummyEventListActive;
    return this.eventsActive;
  }

  getEventFinished() {
    this.eventsFinished = EventService.dummyEventListFinished;
    return this.eventsFinished;
  }

  getActiveEventById(id: number): Event {
    let foundEvent: Event;
    EventService.dummyEventListActive.forEach(event => {
        if (event.id === id ){
          foundEvent = event;
        }
    });
    this.currentEvent = foundEvent;
    return foundEvent;
  }
  getFinishedEventById(id: number): Event {
    let foundEvent: Event;
    EventService.dummyEventListFinished.forEach(event => {
        if (event.id === id) {
          foundEvent = event;
        }
    });
    this.currentEvent = foundEvent;
    return foundEvent;
  }


  registerEvent(
    ime: string,
    adresa: string,
    kategorija: string,
    opis: string,
    pocetak: Date,
    kraj: Date,
    ucesnici: string,
    status: string): Event {
      let maxId: number = 0;
      EventService.dummyEventListActive.forEach(event => {
         if (maxId < event.id) {
             maxId = event.id;
         }
      });

      const id = ++maxId;
      const event: Event = {id, ime, adresa, kategorija, opis, pocetak, kraj, ucesnici, status};

      EventService.dummyEventListActive.push(event);
      console.log(event);
      return event;
  }

}
