import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequestButtonComponent } from './request-button/request-button.component';
// Import HttpClientModule from @angular/common/http
import {HttpModule} from '@angular/http';
import {MatchService} from './match.service';
import { MatchViewComponent } from './match-view/match-view.component';
import { LargeChampImageComponent } from './large-champ-image/large-champ-image.component';
import { MatchDataViewComponent } from './match-data-view/match-data-view.component';
@NgModule({
  declarations: [
    AppComponent,
    RequestButtonComponent,
    MatchViewComponent,
    LargeChampImageComponent,
    MatchDataViewComponent,
  ],
  imports: [
    BrowserModule, HttpModule,
  ],
  providers: [MatchService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
