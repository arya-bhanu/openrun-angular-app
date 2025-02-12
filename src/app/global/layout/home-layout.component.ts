import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
})
export class HomeLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
