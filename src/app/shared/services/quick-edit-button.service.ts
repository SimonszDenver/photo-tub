import { Injectable } from '@angular/core';
import {Button} from '../models/button';

const button = [
  {
    id: 1,
    icon: 'fa fa-sticky-note-o',
    name: 'Preset'
  }
];
@Injectable()
export class QuickEditButtonService {

  constructor() { }
  getButton(): Button[]{
    return button;
  }
}
