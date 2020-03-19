import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as rrweb from 'rrweb';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent {

  constructor(private http: HttpClient) { }

  replay(element) {
    this.http.get<{ events: any[] }>('http://localhost:3000').subscribe(res => {
      const player = new rrweb.Replayer(res.events, {root: element});
      player.play();
    });
  }
}
