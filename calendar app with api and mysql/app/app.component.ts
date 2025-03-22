import { Component, OnInit, Signal, WritableSignal } from '@angular/core';
import { signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingObject } from './calendar/meetings.interface';
import { DateTime } from 'luxon';
import { ClientCreationComponent, } from './client-creation/client-creation.component';
import { Injectable } from '@angular/core';
import { MeetingsArray } from './meeting/meetings-array.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent, MeetingComponent, ClientCreationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = "app";

  constructor(private meetingsArray: MeetingsArray) {}

  meetingSignal: WritableSignal<MeetingObject[]> = signal([])

  getMeetingsArray() {
    return this.meetingSignal;
}
  ngOnInit () {
    
    this.getMeetingsArray
  }



}