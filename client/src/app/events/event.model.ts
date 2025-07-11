

export interface EventDetails {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  pictureId: number;
  type: EventType;
  meetingLocation: string;
  thumbnail: string;
}

export interface IEventSummary {
  id: number;
  name: string;
  type: EventType;
  startDate: Date;
  meetingLocation: string;
  thumbnail: string;
}

export class EventSummary implements IEventSummary{
  id: number;
  name: string;
  type: EventType;
  startDate: Date;
  meetingLocation: string;
  thumbnail: string;

  constructor(record: any) {
    this.id = record.id;
    this.name = record.name;
    this.type = record.type;
    this.startDate = record.startDate;
    this.meetingLocation = record.meetingLocation;
    this.thumbnail = record.thumbnail;
  }
}

export enum EventType {
  Meeting = 'Meeting',
  Outing = 'Outing',
  Service = 'Service',
  Fundraiser = 'Fundraiser',
}
