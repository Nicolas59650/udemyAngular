import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { Databinding2Component } from './databinding2/databinding2.component';

@NgModule({
  declarations: [						
    AppComponent,
      WarningAlertComponent,
      SuccessAlertComponent,
      DatabindingComponent,
      Databinding2Component
   ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
