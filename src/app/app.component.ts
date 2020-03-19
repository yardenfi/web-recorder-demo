import { Component } from '@angular/core';
import * as rrweb from "rrweb";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';
  stopCallback: () => void;
  events: any[] = [];

  constructor(private http: HttpClient) {
  }

  startRecording() {
    this.stopCallback = rrweb.record({
      emit: (event) => {
        this.events.push(event);
      },
    });
    console.log(this.stopCallback);
  }

  saveEvents() {
    this.http.post<{events: any[]}>("http://localhost:3000/events", this.events).subscribe();
    this.stopCallback();
    console.log(this.events);
  }
}
