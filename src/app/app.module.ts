import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.router';
import { SharedModule } from './shared/shared.module';
import { HomeService } from './home/home.service';
import { NewPageService } from './new-page/new-page.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    HomeService,
    NewPageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
