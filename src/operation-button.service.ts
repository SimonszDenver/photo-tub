import { Injectable } from '@angular/core';
import {Button} from './button';

const operation_buttons = [
  {
    id: 7,
    icon: 'fa fa-times',
    name: 'Cancel'
  },
  {
    id: 8,
    icon: 'fa fa-download',
    name: 'Save'
  },
  {
    id: 9,
    icon: 'fa fa-print',
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
