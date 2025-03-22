import { DateTime } from "luxon";
import { Signal } from "@angular/core";
import { Injectable } from "@angular/core";

export interface ClientObject {
  name: Signal<string>;
  email: Signal<string>;
  address: Signal<string>;
  mobile: Signal<number>;
  password: Signal<string>;
  clientId: Signal<number>
}