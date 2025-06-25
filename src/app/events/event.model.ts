

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

export interface EventSummary {
  id: number;
  name: string;
  type: EventType;
  startDate: Date;
  meetingLocation: string;
  thumbnail: string;
}

export enum EventType {
  Meeting = 'Meeting',
  Outing = 'Outing',
  Service = 'Service',
  Fundraiser = 'Fundraiser',
}
