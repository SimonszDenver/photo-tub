import { Injectable } from '@angular/core';
import {Button} from "../models/button";

const buttons = [
  {
    id: 1,
    icon: 'default.jpg',
    name: 'Default'
  },
  {
    id: 2,
    icon: 'atomic.jpg',
    name: 'Atomic'
  },
  {
    id: 3,
    icon: 'custom.jpg',
    name: 'Custom'
  },
  {
    id: 4,
    icon: 'soft.jpg',
    name: 'Soft'
  },
  {
    id: 5,
    icon: 'subtle.jpg',
    name: 'Subtle'
  },
  {
    id: 6,
    icon: 'tooOld.jpg',
    name: 'Old'
  },
  {
    id: 7,
    icon: 'unicolor.jpg',
    name: 'Unicolor'
  },
  {
    id: 8,
    icon: 'vintage.jpg',
    name: 'Vintage'
  }
];
@Injectable()
export class EffectButtonServiceService {

  constructor() { }

  getButtons(): Button[]{
    return buttons;
  }
}
