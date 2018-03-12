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


@NgModule({
  declarations: [
    AppComponent,
    EditImageComponent,
    LoadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EditButtonService, OperationButtonService, QuickEditOptionsService, QuickEditButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
