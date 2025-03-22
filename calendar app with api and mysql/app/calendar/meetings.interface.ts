import { DateTime } from "luxon";
import { Signal } from "@angular/core";
import { Injectable } from "@angular/core";

export interface MeetingObject {
  meetingTopic: Signal<string>;
  numberOfAttendees: Signal<number>;
  meetingDateTime: Signal<DateTime>;
  clientId: Signal<number>;
  meetingId: Signal<number>
}

