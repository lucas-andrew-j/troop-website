import {Component, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-event-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    RouterLink,
    MatCardImage,
    MatCardTitle,
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  eventId = input.required<number>();
  eventTitle = input.required<string>();
  imageSource = input.required<string>();
}
