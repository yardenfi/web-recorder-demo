import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplayService {
  events: any[];

  constructor() { }

  addEvents(events: any[]) {
    this.events = events;
  }

  getEvents(): Observable<any[]> {
    return of(this.events);
  }
}
