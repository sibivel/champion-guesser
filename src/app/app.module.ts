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
import { ChampThumbnailComponent } from './champ-thumbnail/champ-thumbnail.component';
import { ItemThumbnailComponent } from './item-thumbnail/item-thumbnail.component';
import { SpellThumbnailComponent } from './spell-thumbnail/spell-thumbnail.component';
@NgModule({
  declarations: [
    AppComponent,
    RequestButtonComponent,
    MatchViewComponent,
    LargeChampImageComponent,
    MatchDataViewComponent,
    ChampThumbnailComponent,
    ItemThumbnailComponent,
    SpellThumbnailComponent,
  ],
  imports: [
    BrowserModule, HttpModule,
  ],
  providers: [MatchService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
