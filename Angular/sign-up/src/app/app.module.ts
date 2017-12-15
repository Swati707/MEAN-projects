import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { Step1FarmerComponent } from './signup/step-1-farmer/step-1-farmer.component';
import { Step1RetailerComponent } from './signup/step-1-retailer/step-1-retailer.component';
import { Step2FarmerComponent } from './signup/step-2-farmer/step-2-farmer.component';
import { Step2RetailerComponent } from './signup/step-2-retailer/step-2-retailer.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    Step1FarmerComponent,
    Step1RetailerComponent,
    Step2FarmerComponent,
    Step2RetailerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
