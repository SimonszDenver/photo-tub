import {Component, Input, OnInit} from '@angular/core';
import {Button} from '../shared/models/button';
import {EditButtonService} from '../shared/services/edit-button.service';
import {OperationButtonService} from '../shared/services/operation-button.service';
import {QuickEditOptionsService} from '../shared/services/quick-edit-options.service';
import {QuickEditButtonService} from '../shared/services/quick-edit-button.service';
import {Router} from '@angular/router';
import {DataService} from "../shared/services/data.service";
import {AdjustmentButtonOptionsService} from "../shared/services/adjustment-button-options.service";
import {EffectButtonServiceService} from "../shared/services/effect-button-service.service";
import {BorderButtonOptionsService} from "../shared/services/border-button-options.service";
import {ThemePalette} from "@angular/material";

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {

  // quick_edit_button: Button;
  selectedButton: Button;
  selectedAdjustmentButton: Button;
  selectedEffectButton: Button;
  selectedBorderButton: Button;
  selectedOptionButton: Button;
  edit_buttons: Button[];
  operation_buttons: Button[];
  quick_edit_buttons: Button[];
  quick_edit: Button[];
  adjust_buttons_options: Button[];
  effect_button_options: Button[];
  border_button_options: Button[];
  url = null;

  constructor(private edit_button_service: EditButtonService,
              private operation_button_service: OperationButtonService,
              private quick_edit_button_service: QuickEditOptionsService,
              private quick_edit_service: QuickEditButtonService,
              private dataService: DataService,
              private adjustment_button_service: AdjustmentButtonOptionsService,
              private effect_button_service: EffectButtonServiceService,
              private border_button_service: BorderButtonOptionsService,
              private router: Router) {
    this.url = dataService.url;
  }

  ngOnInit() {
    this.getButtons();
  }

  onSelectButton(button) {
    if(button.name === 'quick edit') {
      this.selectedButton = button;
    }else if(button.name === 'Adjustment'){
      this.selectedAdjustmentButton = button;
    }else if(button.name === 'Effect'){
      this.selectedEffectButton = button;
    }else if(button.name === 'Border'){
      this.selectedBorderButton = button;
    }
    this.deselectOtherButton(button);
  }

  deselectOtherButton(button){
    if(button.name === 'quick edit') {
      this.selectedAdjustmentButton = null;
      this.selectedEffectButton = null;
      this.selectedBorderButton = null;
    }else if(button.name === 'Adjustment'){
      this.selectedButton = null;
      this.selectedEffectButton = null;
      this.selectedBorderButton = null;
      this.onDeselectOptionButton();
    }else if(button.name === 'Effect'){
      this.selectedButton = null;
      this.selectedAdjustmentButton = null;
      this.selectedBorderButton = null;
      this.onDeselectOptionButton();
    }else if(button.name === 'Border'){
      this.selectedButton = null;
      this.selectedAdjustmentButton = null;
      this.selectedEffectButton = null;
      this.onDeselectOptionButton();
    }
  }

  onDeselectButton() {
      this.selectedButton = null;
      this.selectedAdjustmentButton = null;
      this.selectedEffectButton = null;
      this.selectedBorderButton = null;
      this.onDeselectOptionButton();
  }

  onSelectOptionButton(button) {
    // should set the option type
    this.selectedOptionButton = button;
  }

  onDeselectOptionButton() {
    this.selectedOptionButton = null;
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
    const adjust_buttons_options = this.adjustment_button_service.getButtons();
    this.adjust_buttons_options = adjust_buttons_options;
    const effect_buttons_options = this.effect_button_service.getButtons();
    this.effect_button_options = effect_buttons_options;
    const border_button_options = this.border_button_service.getButtons();
    this.border_button_options = border_button_options;
  }

  onOperationButtonClick(button) {
    if (button.name === 'Cancel') {
      this.router.navigate(['/load-image']);
    }
  }

}
