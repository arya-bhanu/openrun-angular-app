import { Component, OnInit } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  standalone: true,
  imports: [AnimateOnScrollModule],
  selector: 'app-section-mission',
  templateUrl: 'mission.component.html',
  styleUrl: './mission.component.css',
})
export class MissionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
