

export interface UpcomingEventInfo {
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

export enum EventType {
  Meeting,
  Outing,
  Service,
  Fundraiser,

}
