import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UpcomingEventsComponent} from './upcoming-events/upcoming-events.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'upcoming-events',
    component: UpcomingEventsComponent,
  },
];
