import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-hero',
  templateUrl: 'hero.component.html',
  standalone: true,
  imports: [NgOptimizedImage],
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
