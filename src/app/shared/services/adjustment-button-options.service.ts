import { Injectable } from '@angular/core';
import {Button} from "../models/button";

const buttons = [
  {
    id: 1,
    icon: 'fa fa-crop',
    name: 'Crop'
  },
  {
    id: 2,
    icon: 'fa fa-repeat',
    name: 'Rotate'
  },
  {
    id: 3,
    icon: 'fa fa-search-plus',
    name: 'Zoom In'
  },
  {
    id: 4,
    icon: 'fa fa-search-minus',
    name: 'Zoom Out'
  },
  {
    id: 5,
    icon: 'fa fa-arrows-v',
    name: 'Flip Vertically'
  },
  {
    id: 5,
    icon: 'fa fa-arrows-h',
    name: 'Flip Horizontally'
  }
];
@Injectable()
export class AdjustmentButtonOptionsService {

  constructor() { }

  getButtons(): Button[]{
    return buttons;
  }

}
