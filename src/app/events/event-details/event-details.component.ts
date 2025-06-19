import {Component, inject, input, OnInit} from '@angular/core';
import {EventsService} from '../events.service';
import {EventDetails} from '../event.model';

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent implements OnInit {
  id = input.required<string>();
  private eventsService: EventsService = inject(EventsService);
  protected eventDetails: EventDetails | undefined;

  ngOnInit(): void {
    this.eventsService.getEventDetails(this.id())
      .subscribe(event => {
        this.eventDetails = event;
      });

    console.log(this.eventDetails?.name);
  }
}
