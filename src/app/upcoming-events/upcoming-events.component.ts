import { Component, inject } from '@angular/core';
import {UpcomingEventInfo} from '../upcomingevent';
import {UpcomingEventsService} from './upcoming-events.service';

@Component({
  selector: 'app-upcoming-events',
  imports: [],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css'
})
export class UpcomingEventsComponent {
  protected upcomingEventList: UpcomingEventInfo[];
  private upcomingEventsService: UpcomingEventsService = inject(UpcomingEventsService);

  constructor() {
    this.upcomingEventList = this.upcomingEventsService.getUpcomingEvents();
  }
}
