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


@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {

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
  effect_button_options_01: Button[];
  effect_button_options_02: Button[];
  border_button_options: Button[];

  effect: string;
  url = null;

  // initialize services
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
    const effect_buttons_options_01 = this.effect_button_service.getButtons();
    this.effect_button_options_01 = effect_buttons_options_01;
    const effect_buttons_options_02 = this.effect_button_service.getButtons02();
    this.effect_button_options_02 = effect_buttons_options_02;
    const border_button_options = this.border_button_service.getButtons();
    this.border_button_options = border_button_options;
  }

  onOperationButtonClick(button) {
    if (button.name === 'Cancel') {
      this.router.navigate(['/load-image']);
    }
  }

  // This method is used to add effect to the image
  addEffect(button) {
    if(button.name === 'Blur'){
      this.effect = 'blur';
    }else if(button.name === 'Brightness'){
      this.effect = 'brightness';
    }else if(button.name === 'Contrast'){
      this.effect = 'contrast';
    }else if(button.name === 'Greyscale'){
      this.effect = 'greyscale';
    }else if(button.name === 'Huerotate'){
      this.effect = 'huerotate';
    }else if(button.name === 'Invert'){
      this.effect = 'invert';
    }else if(button.name === 'Opacity'){
      this.effect = 'opacity';
    }else if(button.name === 'Saturate'){
      this.effect = 'saturate';
    }else if(button.name === 'Sepia'){
      this.effect = 'sepia';
    }else if(button.name === 'Shadow'){
      this.effect = 'shadow';
    }else{
      this.effect = '';
    }
  }

}
