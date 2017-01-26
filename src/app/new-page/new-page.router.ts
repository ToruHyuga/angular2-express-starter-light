import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NewPageComponent } from './new-page.component';

const routes: Route[] = [
  {
    path: '',
    component: NewPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
