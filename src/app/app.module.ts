import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from './services/profile.service';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule
  ],

  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
