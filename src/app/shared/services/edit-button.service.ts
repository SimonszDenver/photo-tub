import { Injectable } from '@angular/core';
import { Button } from '../models/button';

const buttons = [
  {
    id: 1,
    icon: 'fa fa-film',
    name: 'Effect'
  },
  {
    id: 2,
    icon: 'fa fa-picture-o',
    name: 'Border',
  },
  {
    id: 3,
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
