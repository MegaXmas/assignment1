
import { signal, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeetingObject } from '../calendar/meetings.interface';
import { DateTime } from 'luxon';
import { } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MeetingsArray {

// meetings = signal<MeetingObject[]>([
//     {
//       meetingTopic: signal("New Meeting"),
//       numberOfAttendees: signal(3),  // Adjust based on your interface
//       meetingDateTime: signal(DateTime.fromISO("2024-04-05T08:00:00", {zone: "local"}))
//     },
//   ]);

// getMeetingsArray() {
//     return this.meetings;
// }

}