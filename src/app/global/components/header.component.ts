import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink, NgOptimizedImage, MenubarModule],
  providers: [HeaderService],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  constructor(private readonly headerService: HeaderService) {}
  items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = this.headerService.getRaceMenuOptions();
  }
}
