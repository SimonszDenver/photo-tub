import { Injectable } from '@angular/core';
import {Button} from '../button';

const buttons = [
  {
    id: 1,
    icon: 'fa fa-adjust',
    name: 'Grain'
  },
  {
    id: 2,
    icon: 'fa fa-film',
    name: 'Vignet'
  },
  {
    id: 3,
    icon: 'fa fa-file-image-o',
    name: 'Brightness'
  },
  {
    id: 4,
    icon: 'fa fa-picture-o',
    name: 'Contrast',
  },
  {
    id: 5,
    icon: 'fa fa-thermometer-empty',
    name: 'Temparature'
  },
  {
    id: 6,
    icon: 'fa fa-font',
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
