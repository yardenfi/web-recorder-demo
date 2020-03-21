import { Component } from '@angular/core';
import {record} from 'rrweb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stopCallback: () => void;
  events: any[];

  startRecording() {
    this.events = [];
    this.stopCallback = record({
      emit: (event) => {
        this.events.push(event);
      },
    });
  }
}
