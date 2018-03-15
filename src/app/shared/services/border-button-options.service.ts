import { Injectable } from '@angular/core';
import {Button} from "../models/button";

const buttons = [
  {
    id: 1,
    icon: 'default-border.jpg',
    name: 'Default'
  },
  {
    id: 2,
    icon: 'snowfir-border.jpg',
    name: 'Snowfir'
  },
  {
    id: 3,
    icon: 'film-border.jpg',
    name: 'Film'
  },
  {
    id: 4,
    icon: 'grunge-border.jpg',
    name: 'Grunge'
  },
  {
    id: 5,
    icon: 'ink-border.jpg',
    name: 'Ink'
  },
  {
    id: 6,
    icon: 'ripped-paper-border.jpg',
    name: 'Ripped Paper'
  },
  {
    id: 7,
    icon: 'rounded-corner-border.jpg',
    name: 'Rounded Corner'
  }
];
@Injectable()
export class BorderButtonOptionsService {

  constructor() { }

  getButtons(): Button[]{
    return buttons;
  }
}
