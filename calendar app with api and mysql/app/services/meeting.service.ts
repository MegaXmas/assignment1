// meeting.service.ts
import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeetingObject } from '../calendar/meetings.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private apiUrl = 'http://localhost:3000/api/meetings';

  constructor(private http: HttpClient) { }

  // Get all meetings
  getAllMeetings(): Observable<MeetingObject[]> {
    return this.http.get<MeetingObject[]>(this.apiUrl);
  }

  createMeeting(meeting: MeetingObject): Observable<MeetingObject> {
    return this.http.post<MeetingObject>(this.apiUrl, meeting);
  }

  updateMeeting(meetingId: number, meetingObject: MeetingObject): Observable<MeetingObject> {
    return this.http.put<MeetingObject>(`${this.apiUrl}/${meetingId}`, meetingObject);
  }
   

  getMeetingsByClientId(clientId : number): Observable<MeetingObject[]> {
    return this.http.get<MeetingObject[]>(`${this.apiUrl}/${clientId}`);
  }
  
  // Add other methods for CRUD operations
}