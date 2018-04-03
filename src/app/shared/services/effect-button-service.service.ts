import { Injectable } from '@angular/core';
import {Button} from "../models/button";


const buttons_01 = [
  {
    id: 1,
    icon: 'default.png',
    name: 'Default'
  },
  {
    id: 2,
    icon: 'blur.png',
    name: 'Blur'
  },
  {
    id: 3,
    icon: 'brightness.png',
    name: 'Brightness'
  },
  {
    id: 4,
    icon: 'contrast.png',
    name: 'Contrast'
  },
  {
    id: 5,
    icon: 'grayscale.png',
    name: 'Greyscale'
  },
  {
    id: 6,
    icon: 'huerotate.png',
    name: 'Huerotate'
  },
  {
    id: 7,
    icon: 'invert.png',
    name: 'Invert'
  }
];

const button_02 = [
  {
    id: 8,
    icon: 'opacity.png',
    name: 'Opacity'
  },
  {
    id: 9,
    icon: 'saturate.png',
    name: 'Saturate'
  },
  {
    id: 10,
    icon: 'sepia.png',
    name: 'Sepia'
  },
  {
    id: 11,
    icon: 'shadow.png',
    name: 'Shadow'
  }
];

@Injectable()
export class EffectButtonServiceService {

  constructor() { }

  getButtons(): Button[]{
    return buttons_01;
  }

  getButtons02() {
    return button_02;
  }
}
