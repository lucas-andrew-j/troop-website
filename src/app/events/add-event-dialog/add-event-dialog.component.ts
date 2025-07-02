import {Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatOption} from '@angular/material/select';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {KeyValuePipe} from '@angular/common';
import {EventSummary, EventType} from '../event.model';
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

  constructor(private eventsService: EventsService,
              private dialogRef: MatDialogRef<AddEventDialogComponent>) {}

  formGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    type: new FormControl<EventType | null>(null, Validators.required),
    startDate: new FormControl<Date | null>(null, Validators.required),
  });

  addEvent() {
    if (this.formGroup.invalid) {
      this.formGroup.markAsTouched();
      return;
    }

    this.eventsService.putEventSummary(
      this.formGroup.get('name')?.value!,
      this.formGroup.get('startDate')?.value!,
      this.formGroup.get('type')?.value!);

    this.dialogRef.close(true);
  }
}
