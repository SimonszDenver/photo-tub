import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import {EditButtonService} from '../edit-button.service';
import {OperationButtonService} from '../operation-button.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EditImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EditButtonService, OperationButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
