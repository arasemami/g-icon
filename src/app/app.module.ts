import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GIconModule} from '../lib/icon.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
