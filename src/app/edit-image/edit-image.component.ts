import {Component, Input, OnInit} from '@angular/core';
import { Button } from '../shared/models/button';
import {EditButtonService} from '../shared/services/edit-button.service';
import {OperationButtonService} from '../shared/services/operation-button.service';
import {QuickEditOptionsService} from '../shared/services/quick-edit-options.service';
import {QuickEditButtonService} from '../shared/services/quick-edit-button.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {DataService} from "../shared/services/data.service";

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
  url = null;
  constructor(private edit_button_service: EditButtonService,
              private operation_button_service: OperationButtonService,
              private quick_edit_button_service: QuickEditOptionsService,
              private quick_edit_service: QuickEditButtonService,
              private dataService: DataService) {
    this.url = dataService.url;
  }

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
