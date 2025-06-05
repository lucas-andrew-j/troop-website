import { Component, inject } from '@angular/core';
import { UpcomingEventInfo } from '../upcomingevent';
import { UpcomingEventsService } from './upcoming-events.service';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-upcoming-events',
  imports: [MatIconModule, DatePipe, MatCard, MatCardHeader, MatCardTitle, MatCardContent],
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
