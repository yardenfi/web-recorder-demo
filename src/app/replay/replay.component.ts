import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent {
  @Input() events: any[];
  @Input() stopRecordingCallback: () => void;

  webPlayer: rrwebPlayer;

  replay(element: HTMLElement) {
    this.stopRecordingCallback();

    if (this.webPlayer) {
      element.innerHTML = '';
      delete this.webPlayer;
    }

    this.webPlayer = new rrwebPlayer({
      target: element, // customizable root element
      data: {
        events: this.events,
        autoPlay: true,
      },
    });
  }
}
