import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { routing } from './home.router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule {}
