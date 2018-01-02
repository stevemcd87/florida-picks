import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { LottoGameComponent } from './lotto-game/lotto-game.component';
import { Compare2HistoryComponent } from './compare-2-history/compare-2-history.component';

import { Pick3LogicService } from './pick3-logic.service';
import { Compare2HistoryService } from './compare-2-history.service';
import { LottoDetailComponent } from './lotto-detail/lotto-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LottoGameComponent,
    Compare2HistoryComponent,
    LottoDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    
  ],
  providers: [Pick3LogicService, Compare2HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
