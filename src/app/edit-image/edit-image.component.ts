import { Component, OnInit } from '@angular/core';
import { Button } from '../../button';
import {EditButtonService} from '../../edit-button.service';
import {OperationButtonService} from '../../operation-button.service';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {

  edit_buttons: Button[];
  operation_buttons: Button[];
  constructor(private edit_button_service: EditButtonService, private operation_button_service: OperationButtonService) { }

  ngOnInit() {
    this.getButtons();
  }
  getButtons(): void {
    const buttons = this.edit_button_service.getButtons();
    this.edit_buttons = buttons;
    const operation_buttons = this.operation_button_service.getButtons();
    this.operation_buttons = operation_buttons;
  }

}
