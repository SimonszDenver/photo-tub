import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import {EditButtonService} from './shared/services/edit-button.service';
import {OperationButtonService} from './shared/services/operation-button.service';
import { AppRoutingModule } from './/app-routing.module';
import {QuickEditOptionsService} from './shared/services/quick-edit-options.service';
import {QuickEditButtonService} from './shared/services/quick-edit-button.service';
import { LoadImageComponent } from './load-image/load-image.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from "./shared/services/data.service";
import {MatCardModule} from "@angular/material";
import {AdjustmentButtonOptionsService} from "./shared/services/adjustment-button-options.service";
import {EffectButtonServiceService} from "./shared/services/effect-button-service.service";
import {BorderButtonOptionsService} from "./shared/services/border-button-options.service";
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    EditImageComponent,
    LoadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatSliderModule
  ],
  providers: [
    EditButtonService,
    OperationButtonService,
    QuickEditOptionsService,
    QuickEditButtonService,
    DataService,
    AdjustmentButtonOptionsService,
    EffectButtonServiceService,
    BorderButtonOptionsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
