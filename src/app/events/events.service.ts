import {Injectable} from '@angular/core';
import {EventType, UpcomingEventInfo} from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor() { }

  protected upcomingEventList: UpcomingEventInfo[] = [
    {
      id: 0,
      name: 'Event 0',
      description: 'Event 0\'s description',
      startDate: new Date("January 1, 2025"),
      endDate: new Date("January 3, 2025"),
      pictureId: 0,
      type: EventType.Outing,
      meetingLocation: 'location 0',
      thumbnail: 'thumbnail/url',
    },
    {
      id: 1,
      name: 'Event 1',
      description: 'Event 1\'s description',
      startDate: new Date("February 1, 2025"),
      endDate: new Date("February 3, 2025"),
      pictureId: 1,
      type: EventType.Service,
      meetingLocation: 'location 1',
      thumbnail: 'thumbnail/url',
    },
    {
      id: 2,
      name: 'Event 2',
      description: 'Event 2\'s description',
      startDate: new Date("March 1, 2025"),
      endDate: new Date("March 3, 2025"),
      pictureId: 2,
      type: EventType.Fundraiser,
      meetingLocation: 'location 2',
      thumbnail: 'thumbnail/url',
    },
  ];

  getUpcomingEvents() {
    return this.upcomingEventList;
  }
}
