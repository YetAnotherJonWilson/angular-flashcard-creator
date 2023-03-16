import { Component } from '@angular/core';
import { DecksService } from '../decks.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent {
  decks: {
    "_id": any,
    "title": string,
    "desc": string,
    "list": any[],
    deckId: number
  }[] = [{
    "_id": {
      "$oid": ""
    },
    "title": "",
    "desc": "",
    "list": [{}],
    deckId: 0
  }];
  constructor(private decksService: DecksService) {

  }
  ngOnInit() {
    this.decks = this.decksService.getDecks();
  }
}
