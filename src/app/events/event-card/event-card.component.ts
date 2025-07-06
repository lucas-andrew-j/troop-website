import {Component, inject, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';
import {Router} from '@angular/router';
import {EventType} from '../event.model';
import {MatIcon} from '@angular/material/icon';
import {MatMiniFabButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-event-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatCardTitle,
    MatIcon,
    MatMiniFabButton,
    MatTooltip,
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  eventId = input.required<number>();
  eventTitle = input.required<string>();
  eventType = input.required<EventType>();
  imageSource = input<string>();
  protected readonly EventType = EventType;

  private eventsService: EventsService = inject(EventsService);

  constructor(private router: Router) { }

  route() {
    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) {
      this.router.navigate(['/event', this.eventId()]);
    }
  }

  delete(id: number, event: Event) {
    event.stopPropagation();
    this.eventsService.deleteEvent(id)
  }
}
