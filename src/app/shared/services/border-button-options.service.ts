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
    name: 'Redacted'
  },
  {
    id: 3,
    icon: '',
    name: 'Film'
  },
  {
    id: 4,
    icon: '',
    name: 'Grunge'
  },
  {
    id: 5,
    icon: '',
    name: 'Ink'
  },
  {
    id: 6,
    icon: '',
    name: 'Ripped Paper'
  }
];
@Injectable()
export class BorderButtonOptionsService {

  constructor() { }

  getButtons(): Button[]{
    return buttons;
  }
}
