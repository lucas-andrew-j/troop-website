import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogContent} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatOption} from '@angular/material/select';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {KeyValuePipe} from '@angular/common';
import {EventType} from '../event.model';

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
}
