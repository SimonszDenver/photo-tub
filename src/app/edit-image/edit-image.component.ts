import {Component, OnInit} from '@angular/core';
import {Button} from '../shared/models/button';
import {EditButtonService} from '../shared/services/edit-button.service';
import {OperationButtonService} from '../shared/services/operation-button.service';
import {QuickEditOptionsService} from '../shared/services/quick-edit-options.service';
import {QuickEditButtonService} from '../shared/services/quick-edit-button.service';
import {Router} from '@angular/router';
import {DataService} from "../shared/services/data.service";
import {EffectButtonServiceService} from "../shared/services/effect-button-service.service";
import {BorderButtonOptionsService} from "../shared/services/border-button-options.service";
import {MatDialog} from '@angular/material';
import {PresetButtonService} from '../shared/services/preset-button.service';
import {Url} from "../shared/models/url";


@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {

  selectedButton: Button;
  selectedEffectButton: Button;
  selectedPresetButton: Button;
  selectedOptionButton: Button;
  edit_buttons: Button[];
  operation_buttons: Button[];
  quick_edit_buttons: Button[];
  quick_edit: Button[];
  effect_button_options_01: Button[];
  effect_button_options_02: Button[];
  preset_button_options: Button[];

  effect: string;
  urls: Url[] = null;
  customize_effect = 'show';

  slideIndex = 0;
  slides = 0;
  // initialize services
  constructor(private edit_button_service: EditButtonService,
              private operation_button_service: OperationButtonService,
              private quick_edit_button_service: QuickEditOptionsService,
              private quick_edit_service: QuickEditButtonService,
              private dataService: DataService,
              private effect_button_service: EffectButtonServiceService,
              private preset_button_service: PresetButtonService,
              private router: Router) {
    this.urls = this.dataService.url;
    this.slides = this.urls[0].id;
  }

  ngOnInit() {
    this.getButtons();
  }

  onSelectButton(button) {
    if(button.name === 'quick edit') {
      this.selectedButton = button;
    }else if(button.name === 'Effect'){
      this.selectedEffectButton = button;
    }else if(button.name === 'Preset'){
      this.selectedPresetButton = button;
    }
    this.deselectOtherButton(button);
  }

  deselectOtherButton(button){
    if(button.name === 'quick edit') {
      this.selectedEffectButton = null;
      this.selectedPresetButton = null;
    }else if(button.name === 'Adjustment'){
      this.selectedButton = null;
      this.selectedEffectButton = null;
      this.selectedPresetButton = null;
      this.onDeselectOptionButton();
    }else if(button.name === 'Effect'){
      this.selectedButton = null;
      this.selectedPresetButton = null;
      this.onDeselectOptionButton();
    }else if(button.name === 'Preset'){
      this.selectedButton = null;
      this.selectedEffectButton = null;
      this.onDeselectOptionButton();
    }
  }

  onDeselectButton() {
      this.selectedButton = null;
      this.selectedEffectButton = null;
      this.selectedPresetButton = null;
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
    const effect_buttons_options_01 = this.effect_button_service.getButtons();
    this.effect_button_options_01 = effect_buttons_options_01;
    const effect_buttons_options_02 = this.effect_button_service.getButtons02();
    this.effect_button_options_02 = effect_buttons_options_02;
    const preset_button_options = this.preset_button_service.getButtons();
    this.preset_button_options = preset_button_options;
  }

  onOperationButtonClick(button) {
    if (button.name === 'Cancel') {
      this.router.navigate(['/load-image']);
    }
  }

  // This method is used to add effect to the image
  addEffect(button) {
    console.log("working");
    const value = this.slideIndex;
    console.log("value "+value);
    if(button.name === 'Blur'){
      this.urls[value].className = 'blur';
    }else if(button.name === 'Brightness'){
      this.urls[value].className = 'brightness';
    }else if(button.name === 'Contrast'){
      this.urls[value].className = 'contrast';
    }else if(button.name === 'Greyscale'){
      this.urls[value].className = 'greyscale';
    }else if(button.name === 'Huerotate'){
      this.urls[value].className = 'huerotate';
    }else if(button.name === 'Invert'){
      this.urls[value].className = 'invert';
    }else if(button.name === 'Opacity'){
      this.urls[value].className = 'opacity';
    }else if(button.name === 'Saturate'){
      this.urls[value].className = 'saturate';
    }else if(button.name === 'Sepia'){
      this.urls[value].className = 'sepia';
    }else if(button.name === 'Shadow'){
      this.urls[value].className = 'shadow';
    }else{
      this.urls[value].className = '';
    }
  }

  cancelOperation(value) {
    this.customize_effect = value;
  }

  openDialog(value){
    this.customize_effect = value;
  }

  slideIncrease(){
    this.slideIndex++;
    this.increseSlideNumber(this.slideIndex);
  }

  slideDecrease(){
    this.slideIndex--;
    this.increseSlideNumber(this.slideIndex);
  }


  increseSlideNumber(n){
    if (n >= this.slides) {this.slideIndex = 0}
    if (n < 0) {this.slideIndex= this.slides-1}
  }
}
