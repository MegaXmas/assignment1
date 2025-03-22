import { Component, Injectable, OnInit, signal } from '@angular/core';
import { MeetingObject } from '../calendar/meetings.interface';
import { DateTime, Info, Interval} from 'luxon';
import { CommonModule, NgFor } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MeetingsArray } from './meetings-array.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingService } from '../services/meeting.service';
import { ClientObject } from '../client-creation/client.interface';


@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})

export class MeetingComponent implements OnInit {
 
  activeClient? : ClientObject;

  clientMeetingForm = this.fb.group({
    meetingTopic: ['', [Validators.required, Validators.minLength(2)]],
    numberOfAttendees: ['', [Validators.required]],
    meetingDateTime: ['', [Validators.required]]
  });
  

  constructor(
    private fb: FormBuilder, 
    private meetingService: MeetingService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}



  ngOnInit() {
    console.log('Initial form state:', this.clientMeetingForm.value)
  }

  onSubmit() {
    console.log('form submitted', this.clientMeetingForm.value)
    // TODO: Generate meetingId here

    const meetingObject: MeetingObject = {
      meetingTopic: signal(this.clientMeetingForm.value.meetingTopic!),
      numberOfAttendees: signal(Number(this.clientMeetingForm.value.numberOfAttendees!)),
      meetingDateTime: signal(DateTime.fromISO(this.clientMeetingForm.value.meetingDateTime!)),
      meetingId: signal(Number()),
      clientId: signal(Number())
    };

    // Pass meeting to backend through MeetingService
    
  }



}