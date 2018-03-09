import { Injectable } from '@angular/core';
import { Button } from './button';

const buttons = [
  {
    id: 1,
    icon: '',
    name: 'Adjustment'
  },
  {
    id: 2,
    icon: '',
    name: 'Effect'
  },
  {
    id: 3,
    icon: '',
    name: 'Overlay'
  },
  {
    id: 4,
    icon: '',
    name: 'Border',
  },
  {
    id: 5,
    icon: '',
    name: 'Type'
  },
  {
    id: 6,
    icon: '',
    name: 'Quick Edit'
  }
];

@Injectable()
export class EditButtonService {

  constructor() { }

  getButtons(): Button[] {
    return buttons;
  }
}
