import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReplayComponent } from './replay/replay.component';
import {ReplayService} from './replay-service/replay.service';

@NgModule({
  declarations: [
    AppComponent,
    ReplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ReplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
