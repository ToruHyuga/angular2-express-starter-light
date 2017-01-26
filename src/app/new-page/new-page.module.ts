import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NewPageComponent } from './new-page.component';
import { routing } from './new-page.router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewPageComponent
  ],
  bootstrap: [
    NewPageComponent
  ]
})
export class NewPageModule {}
