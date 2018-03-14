import { Injectable } from '@angular/core';
import {Button} from "../models/button";

const buttons = [
  {
    id: 1,
    icon: '',
    name: 'Default'
  },
  {
    id: 2,
    icon: '',
    name: 'Atomic'
  },
  {
    id: 3,
    icon: '',
    name: 'Creative'
  },
  {
    id: 4,
    icon: '',
    name: 'Soft'
  },
  {
    id: 5,
    icon: '',
    name: 'Subtle'
  },
  {
    id: 6,
    icon: '',
    name: 'Old'
  },
  {
    id: 7,
    icon: '',
    name: 'Unicolor'
  },
  {
    id: 8,
    icon: '',
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
