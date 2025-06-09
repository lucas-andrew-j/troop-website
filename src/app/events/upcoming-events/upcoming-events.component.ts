import {Component, inject} from '@angular/core';
import {UpcomingEventInfo} from '../event.model';
import {EventsService} from '../events.service';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';
import {MatFabButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

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
    MatFabButton,
    RouterLink,
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.scss'
})
export class UpcomingEventsComponent {
  protected upcomingEventList: UpcomingEventInfo[];
  private upcomingEventsService: EventsService = inject(EventsService);
  defaultSelections = ['Meetings', 'Outings', 'Service', 'Fundraiser'];

  constructor() {
    this.upcomingEventList = this.upcomingEventsService.getUpcomingEvents();
  }

  addEvent() {
    // TODO: Bring up dialog to add an event
    console.log('add new event');
  }
}
