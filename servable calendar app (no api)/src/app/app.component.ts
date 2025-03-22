import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingObject } from './calendar/meetings.interface';
import { DateTime } from 'luxon';
import { ClientCreationComponent, } from './client-creation/client-creation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent, MeetingComponent, ClientCreationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = "app";


  meetings = signal<MeetingObject[]>([
    {
      meetingTopic: signal("New Meeting"),
      numberOfAttendees: signal(3), 
      meetingDateTime: signal(DateTime.fromISO("2024-04-05T08:00:00", {zone: "local"}))
    },
  ]);
}