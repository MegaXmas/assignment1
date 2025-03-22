import { DateTime } from "luxon";
import { Signal } from "@angular/core";

export interface MeetingObject {
  //[key: string]: string[];
  meetingTopic: Signal<string>;
  numberOfAttendees: Signal<number>;
  meetingDateTime: Signal<DateTime>;
}
