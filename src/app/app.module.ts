import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequestButtonComponent } from './request-button/request-button.component';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';
import {MatchService} from './match.service';
@NgModule({
  declarations: [
    AppComponent,
    RequestButtonComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
  ],
  providers: [MatchService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
