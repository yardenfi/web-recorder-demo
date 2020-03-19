import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as rrweb from 'rrweb';
import {ReplayService} from '../replay-service/replay.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent {

  constructor(private replayService: ReplayService) { }

  replay(element) {
    this.replayService.getEvents().subscribe(events => {
      const player = new rrweb.Replayer(events, {root: element});
      player.play();
    });
  }
}
