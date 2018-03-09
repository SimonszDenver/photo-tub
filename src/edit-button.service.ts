import { Injectable } from '@angular/core';
import { Button } from './button';

const buttons = [
  {
    id: 1,
    icon: 'fa fa-adjust',
    name: 'Adjustment'
  },
  {
    id: 2,
    icon: 'fa fa-film',
    name: 'Effect'
  },
  {
    id: 3,
    icon: 'fa fa-file-image-o',
    name: 'Overlay'
  },
  {
    id: 4,
    icon: 'fa fa-picture-o',
    name: 'Border',
  },
  {
    id: 5,
    icon: 'fa fa-font',
    name: 'Type'
  }
];

@Injectable()
export class EditButtonService {

  constructor() { }

  getButtons(): Button[] {
    return buttons;
  }
}
