import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { MissionComponent } from "./sections/mission/mission.component";
import { VideoIntroComponent } from "./sections/video-intro/video-intro.component";
import { NameComponent } from "./sections/upcoming-event/upcoming-event.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [HeroComponent, MissionComponent, VideoIntroComponent, NameComponent],
  standalone: true,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
