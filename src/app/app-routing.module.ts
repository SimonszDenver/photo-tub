import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditImageComponent} from './edit-image/edit-image.component';
import {RouterModule, Routes} from '@angular/router';
import {LoadImageComponent} from './load-image/load-image.component';

const routes = [
  {
    path: 'load-image',
    component: LoadImageComponent
  },
  {
    path: 'edit-image',
    component: EditImageComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
