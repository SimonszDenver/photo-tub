import { Injectable } from '@angular/core';
import {Button} from '../models/button';

const buttons = [
  {
    id: 1,
    icon: 'fa fa-snowflake-o',
    name: 'Grain'
  },
  {
    id: 2,
    icon: 'fa fa-window-maximize',
    name: 'Vignet'
  },
  {
    id: 3,
    icon: 'fa fa-sun-o',
    name: 'Brightness'
  },
  {
    id: 4,
    icon: 'fa fa-adjust',
    name: 'Contrast',
  },
  {
    id: 5,
    icon: 'fa fa-thermometer-empty',
    name: 'Temparature'
  },
  {
    id: 6,
    icon: 'fa fa-low-vision',
    name: 'Vibrance'
  }
];

@Injectable()
export class QuickEditOptionsService {

  constructor() { }
  getButtons(): Button[] {
    return buttons;
  }

}
