import {inject, Injectable} from '@angular/core';
import {EventType, EventDetails, EventSummary} from './event.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private httpClient = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  constructor() { }

  protected upcomingEventList: EventSummary[] = [
    {
      id: 0,
      name: 'Event 0',
      startDate: new Date("January 1, 2025"),
      type: EventType.Outing,
      meetingLocation: 'location 0',
      thumbnail: 'thumbnail/url',
    },
    {
      id: 1,
      name: 'Event 1',
      startDate: new Date("February 1, 2025"),
      type: EventType.Service,
      meetingLocation: 'location 1',
      thumbnail: 'thumbnail/url',
    },
    {
      id: 2,
      name: 'Event 2',
      startDate: new Date("March 1, 2025"),
      type: EventType.Fundraiser,
      meetingLocation: 'location 2',
      thumbnail: 'thumbnail/url',
    },
    {
      id: 3,
      name: 'Event 3',
      startDate: new Date("April 1, 2025"),
      type: EventType.Meeting,
      meetingLocation: 'location 3',
      thumbnail: 'thumbnail/url',
    },
  ];

  protected eventList: EventDetails[] = [
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
    {
      id: 3,
      name: 'Event 3',
      description: 'Event 3\'s description',
      startDate: new Date("April 1, 2025"),
      endDate: new Date("April 3, 2025"),
      pictureId: 3,
      type: EventType.Meeting,
      meetingLocation: 'location 3',
      thumbnail: 'thumbnail/url',
    },
  ];

  getEventDetails(id: string): Observable<EventDetails | undefined> {
    let idNum = parseInt(id);

    let eventDetails = this.eventList.find(event => event.id === idNum);

    return of(eventDetails);
  }

  getUpcomingEventSummaries(): Observable<EventSummary[]> {
    return this.httpClient.get<EventSummary[]>(`${this.apiUrl}/upcoming-events`);
  }

  postEvent(name: string, startDate: Date, type: EventType): EventSummary {
    let highestId = -1;
    this.upcomingEventList.forEach(event => {
      if (event.id > highestId) {
        highestId = event.id;
      }
    });

    const newEventSummary: EventSummary = {
      id: highestId + 1,
      name: name,
      startDate: startDate,
      type: type,
      meetingLocation: '',
      thumbnail: '',
    };

    this.upcomingEventList.push(newEventSummary);

    this.eventList.push({
      description: '',
      endDate: startDate,
      pictureId: 0,
      ...newEventSummary
    })

    return newEventSummary;
  }

  deleteEvent(id: number): Observable<boolean> {
    for (let i = 0; i < this.eventList.length; ++i) {
      if (this.eventList[i].id === id) {
        this.eventList.splice(i, 1);
        return of(true);
      }
    }

    return of(false);
  }
}
