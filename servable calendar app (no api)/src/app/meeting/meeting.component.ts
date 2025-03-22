import { Component, OnInit } from '@angular/core';
import { MeetingObject } from '../calendar/meetings.interface';
import { DateTime, Info, Interval } from 'luxon';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})

export class MeetingComponent implements OnInit {
  
 clientMeetingForm = this.fb.group({
      meetingTopic: ['', [Validators.required, Validators.minLength(2)]],
      attendees: ['', [Validators.required]],
      meetingDateTime: ['', [Validators.required]],
      });
 
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log('Initial form state:', this.clientMeetingForm.value)
  }

  onSubmit() {
    console.log('form submitted', this.clientMeetingForm.value)
  }

}
