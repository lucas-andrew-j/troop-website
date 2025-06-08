import {Component, input} from '@angular/core';

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent {
  id = input.required<number>();
}
