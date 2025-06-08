import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UpcomingEventsComponent} from './events/upcoming-events/upcoming-events.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {PastEventsComponent} from './events/past-events-component/past-events.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {VolunteerComponent} from './volunteer/volunteer.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ResourcesComponent} from './resources/resources.component';

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
    path: 'past-events',
    component: PastEventsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'volunteer',
    component: VolunteerComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'event/:id',
    component: EventDetailsComponent,
  },
];
