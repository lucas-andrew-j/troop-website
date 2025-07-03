import {Component, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';
import {Router, RouterLink} from '@angular/router';
import {EventType} from '../event.model';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-event-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    RouterLink,
    MatCardImage,
    MatCardTitle,
    MatIcon,
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

  constructor(private router: Router) { }

  route() {
    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) {
      this.router.navigate(['/event', this.eventId()]);
    }
  }
}
