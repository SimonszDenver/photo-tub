import { Injectable } from '@angular/core';
import {Button} from './button';

const operation_buttons = [
  {
    id: 7,
    icon: '',
    name: 'Cancel'
  },
  {
    id: 8,
    icon: '',
    name: 'Save'
  },
  {
    id: 9,
    icon: '',
    name: 'Print'
  }
];

@Injectable()
export class OperationButtonService {

  constructor() { }

  getButtons(): Button[] {
    return operation_buttons;
  }
}
