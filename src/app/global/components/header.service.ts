import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  constructor() {}
  getRaceMenuOptions(): MenuItem[] {
    return [
      {
        label: 'Race',
        items: [
          { label: 'Trail Run', route: '/trail-run' },
          { label: 'Road Run', route: '/road-run' },
        ],
      },
      {
        label: 'Community',
        route: '/community',
      },
      {
        label: 'Shop',
        route: '/shop',
      },
    ];
  }
}
