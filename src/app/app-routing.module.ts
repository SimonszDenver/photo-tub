import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditImageComponent} from './edit-image/edit-image.component';
import {RouterModule, Routes} from '@angular/router';

const routes = [
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
