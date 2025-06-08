import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UpcomingEventsComponent} from './events/upcoming-events/upcoming-events.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'upcoming-events',
    component: UpcomingEventsComponent,
  },
  {
    path: 'event/:id',
    component: EventDetailsComponent,
  }
];
