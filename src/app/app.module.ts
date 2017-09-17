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
import { KeystoneThumbnailComponent } from './keystone-thumbnail/keystone-thumbnail.component';
import { ScoreViewComponent } from './score-view/score-view.component';
import { ScoreService } from './score.service';
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
    KeystoneThumbnailComponent,
    ScoreViewComponent,
  ],
  imports: [
    BrowserModule, HttpModule,
  ],
  providers: [MatchService,ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
