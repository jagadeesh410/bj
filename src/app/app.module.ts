import { RegistrationFormComponent } from './../UI/Registration';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,RegistrationFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
