import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [HeroComponent],
  standalone: true,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
