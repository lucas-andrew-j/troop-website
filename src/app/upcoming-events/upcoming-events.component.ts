import {Component, inject, output} from '@angular/core';
import {UpcomingEventInfo} from './upcomingevent';
import {UpcomingEventsService} from './upcoming-events.service';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';
import {MatFabButton} from '@angular/material/button';

@Component({
  selector: 'app-upcoming-events',
  imports: [
    MatIconModule,
    DatePipe,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardImage,
    MatFabButton
  ],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css'
})
export class UpcomingEventsComponent {
  protected upcomingEventList: UpcomingEventInfo[];
  private upcomingEventsService: UpcomingEventsService = inject(UpcomingEventsService);

  constructor() {
    this.upcomingEventList = this.upcomingEventsService.getUpcomingEvents();
  }

  addEvent() {
    // TODO: Bring up dialog to add an event
    console.log('add new event');
  }

  openEventDetails(id: number) {
    // TODO: This can't output through router-outlet
    console.log(id);
  }
}
