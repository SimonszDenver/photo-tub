import {Component, Input, OnInit} from '@angular/core';
import { Button } from '../../button';
import {EditButtonService} from '../edit-button.service';
import {OperationButtonService} from '../operation-button.service';
import {QuickEditOptionsService} from '../quick-edit-options.service';
import {QuickEditButtonService} from '../quick-edit-button.service';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {
  @Input() quick_edit_button: Button;
  selectedButton: Button;
  edit_buttons: Button[];
  operation_buttons: Button[];
  quick_edit_buttons: Button[];
  quick_edit: Button[];
  constructor(private edit_button_service: EditButtonService
              , private operation_button_service: OperationButtonService
              , private quick_edit_button_service: QuickEditOptionsService
              , private quick_edit_service: QuickEditButtonService) { }

  ngOnInit() {
    this.getButtons();
  }

  onSelectButton(button) {
    this.selectedButton =  button;
  }

  onDeselectButton(){
    this.selectedButton = null;
  }
  getButtons(): void {
    const buttons = this.edit_button_service.getButtons();
    this.edit_buttons = buttons;
    const operation_buttons = this.operation_button_service.getButtons();
    this.operation_buttons = operation_buttons;
    const quick_edit_buttons = this.quick_edit_button_service.getButtons();
    this.quick_edit_buttons = quick_edit_buttons;
    const quick_edit = this.quick_edit_service.getButton();
    this.quick_edit = quick_edit;
  }

}
