import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GoogleIconModule} from '../lib/google-icon.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
