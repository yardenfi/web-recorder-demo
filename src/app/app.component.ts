import { Component } from '@angular/core';
import * as rrweb from "rrweb";
import {ReplayService} from './replay-service/replay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stopCallback: () => void;
  events: any[] = [];

  constructor(private replayService: ReplayService) {
  }

  startRecording() {
    this.stopCallback = rrweb.record({
      emit: (event) => {
        this.events.push(event);
      },
    });
  }

  saveEvents() {
    this.replayService.addEvents(this.events);
    this.stopCallback();
  }
}
