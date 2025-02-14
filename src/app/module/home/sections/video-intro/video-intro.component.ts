import { Component, OnInit } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  standalone: true,
  imports: [AnimateOnScrollModule],
  selector: 'app-video-intro-section',
  templateUrl: 'video-intro.component.html',
  styleUrl: './video-intro.component.css',
})
export class VideoIntroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
