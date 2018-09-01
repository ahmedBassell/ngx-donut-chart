import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDonutChartModule } from 'ngxDonutChart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDonutChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
