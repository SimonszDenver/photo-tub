import { Injectable } from '@angular/core';
import {Button} from '../models/button';

const preset_buttons = [
  {
    id: 1,
    icon: 'fa fa-plus',
    name: 'Add Preset'
  }
];
@Injectable()
export class PresetButtonService {

  constructor() { }

  getButtons() : Button[]{
    return preset_buttons;
  }
}
