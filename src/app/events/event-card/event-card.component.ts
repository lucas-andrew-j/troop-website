import {Component, inject, input, output, signal, WritableSignal} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';
import {Router} from '@angular/router';
import {EventType} from '../event.model';
import {MatIcon} from '@angular/material/icon';
import {MatMiniFabButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {EventsService} from '../events.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../../shared/confirmation-dialog/confirmation-dialog.component';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

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
    MatProgressSpinner,
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  eventId = input.required<number>();
  eventTitle = input.required<string>();
  eventType = input.required<EventType>();
  imageSource = input<string>();

  private dialog = inject(MatDialog);
  private eventsService: EventsService = inject(EventsService);

  eventDelete = output<number>();
  protected isDeleting: WritableSignal<boolean> = signal(false);

  protected readonly EventType = EventType;

  constructor(private router: Router) { }

  route() {
    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) {
      this.router.navigate(['/event', this.eventId()]);
    }
  }

  delete(id: number, event: Event) {
    event.stopPropagation();

    this.dialog.open<ConfirmationDialogComponent, any, boolean>(ConfirmationDialogComponent, {})
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.isDeleting.set(true);
          this.eventsService.deleteEvent(id);
          this.eventDelete.emit(id);
          this.isDeleting.set(false);
        }
      });
  }
}
