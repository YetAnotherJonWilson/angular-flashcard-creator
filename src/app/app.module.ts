import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckListComponent } from './deck-list/deck-list.component';
import { CreateNewDeckComponent } from './create-new-deck/create-new-deck.component';
import { DeckComponent } from './deck/deck.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, DeckListComponent, CreateNewDeckComponent, DeckComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
