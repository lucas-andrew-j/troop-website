import {Component, inject} from '@angular/core';
import {EventType, EventDetails, EventSummary} from '../event.model';
import {EventsService} from '../events.service';
import {MatIconModule} from '@angular/material/icon';
import {AsyncPipe, DatePipe} from '@angular/common';
import {MatFabButton} from '@angular/material/button';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {EventCardComponent} from '../event-card/event-card.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-upcoming-events',
  imports: [
    MatIconModule,
    DatePipe,
    MatFabButton,
    MatButtonToggleGroup,
    MatButtonToggle,
    EventCardComponent,
    AsyncPipe
  ],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.scss'
})
export class UpcomingEventsComponent {
  protected upcomingEventList: Observable<EventSummary[]>;
  private upcomingEventsService: EventsService = inject(EventsService);
  defaultSelections = [EventType.Meeting, EventType.Outing, EventType.Service, EventType.Fundraiser];

  constructor() {
    this.upcomingEventList = this.upcomingEventsService.getUpcomingEventSummaries();
  }

  addEvent() {
    // TODO: Bring up dialog to add an event
    console.log('add new event');
  }

  protected readonly EventType = EventType;
}
