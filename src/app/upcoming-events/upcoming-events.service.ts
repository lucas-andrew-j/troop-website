import { Injectable } from '@angular/core';
import {UpcomingEventInfo} from '../upcomingevent';

@Injectable({
  providedIn: 'root'
})
export class UpcomingEventsService {
  constructor() { }

  protected upcomingEventList: UpcomingEventInfo[] = [
    {
      id: 0,
      name: 'Event 0',
      description: 'Event 0\'s description',
      date: new Date("January 1, 2025"),
      pictureId: 0,
    },
    {
      id: 1,
      name: 'Event 1',
      description: 'Event 1\'s description',
      date: new Date("February 1, 2025"),
      pictureId: 1,
    },
    {
      id: 2,
      name: 'Event 2',
      description: 'Event 2\'s description',
      date: new Date("March 1, 2025"),
      pictureId: 2,
    },
  ];

  getUpcomingEvents() {
    return this.upcomingEventList;
  }
}
