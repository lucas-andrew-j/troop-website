import {Component, inject} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatOption} from '@angular/material/select';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {KeyValuePipe} from '@angular/common';
import {EventType} from '../event.model';
import {MatButton} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-add-event-dialog',
  imports: [
    MatFormFieldModule,
    MatDialogContent,
    MatDatepickerModule,
    MatOption,
    MatSelectModule,
    MatInputModule,
    KeyValuePipe,
    MatDialogActions,
    MatButton,
    ReactiveFormsModule,
    MatDialogClose,
  ],
  providers: [
    MatDatepickerModule,
    provideNativeDateAdapter()
  ],
  templateUrl: './add-event-dialog.component.html',
  styleUrl: './add-event-dialog.component.scss'
})
export class AddEventDialogComponent {
  protected readonly EventType = EventType;
  private eventsService: EventsService = inject(EventsService);

  formGroup = new FormGroup({
    eventName: new FormControl<string>('', Validators.required),
    eventType: new FormControl<EventType | null>(null, Validators.required),
    eventStart: new FormControl<Date | null>(null, Validators.required),
  });

  addEvent() {
    this.eventsService.putEventSummary(
      this.formGroup.get('eventName')?.value!,
      this.formGroup.get('eventStart')?.value!,
      this.formGroup.get('eventType')?.value!);
    // console.log(this.formGroup.value);
    console.log(this.formGroup.valid);
  }
}
