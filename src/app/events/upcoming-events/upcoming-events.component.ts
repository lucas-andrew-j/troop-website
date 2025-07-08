import {Component, computed, inject, Signal, signal, WritableSignal} from '@angular/core';
import {EventType, EventSummary} from '../event.model';
import {EventsService} from '../events.service';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatFabButton} from '@angular/material/button';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {EventCardComponent} from '../event-card/event-card.component';
import {MatDialog} from '@angular/material/dialog';
import {AddEventDialogComponent} from '../add-event-dialog/add-event-dialog.component';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-upcoming-events',
  imports: [
    MatIconModule,
    DatePipe,
    MatFabButton,
    MatButtonToggleGroup,
    MatButtonToggle,
    EventCardComponent,
    MatDivider
  ],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.scss'
})
export class UpcomingEventsComponent {
  private upcomingEventsService: EventsService = inject(EventsService);
  defaultSelections = [EventType.Meeting, EventType.Outing, EventType.Service, EventType.Fundraiser];
  private dialog = inject(MatDialog);

  private eventListSignal: WritableSignal<EventSummary[]> = signal([]);
  private sortedEvents: Signal<EventSummary[]> = computed(
    () => this.eventListSignal().sort((a, b) => new Date(a.startDate) < new Date(b.startDate) ? 0 : 1)
  );
  protected groupedEvents: Signal<EventSummary[][]> = computed(() => this.buildMonthLists(this.sortedEvents()));

  constructor() {
    this.upcomingEventsService.getUpcomingEventSummaries().subscribe(eventList => {
      this.eventListSignal.set(eventList);
    });
  }

  openAddEventDialog() {
    this.dialog.open<AddEventDialogComponent, any, EventSummary>(AddEventDialogComponent, {})
      .afterClosed()
      .subscribe((newEvent) => {
        if (newEvent) {
          this.eventListSignal.update(originalList => [...originalList, newEvent]);
        }
      });
  }

  protected readonly EventType = EventType;
  protected monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  buildMonthLists(upcomingEventList: EventSummary[]) : EventSummary[][] {
    if (upcomingEventList.length === 0) {
      return [];
    }

    let currentMonthYear = this.monthHeader(upcomingEventList[0].startDate);
    let currentMonthList: EventSummary[] = [];
    let result: EventSummary[][] = [];

    for (let i = 0; i < upcomingEventList.length; i++) {
      if (this.monthHeader(upcomingEventList[i].startDate) !== currentMonthYear) {
        result.push(currentMonthList);
        currentMonthList = [];
        currentMonthYear = this.monthHeader(upcomingEventList[i].startDate);
      }

      currentMonthList.push(upcomingEventList[i]);
    }

    result.push(currentMonthList);
    return result;
  }

  monthHeader(thisDate: Date): string {
    thisDate = new Date(thisDate);
    if (thisDate.getFullYear() === new Date().getFullYear()) {
      return this.monthNames[thisDate.getMonth()];
    }
    else {
      return this.monthNames[thisDate.getMonth()] + ' ' + thisDate.getFullYear();
    }
  }

  handleEventDeletion(eventId: number) {
    this.eventListSignal.update(originalList => originalList.filter(event => event.id !== eventId));
  }
}
