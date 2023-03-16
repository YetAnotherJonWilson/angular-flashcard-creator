import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {
  constructor(private route: ActivatedRoute) {}
  
  deck = [{"title": "cardtitle", "text": "some text here"}]
  deckId = 0;
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deckId = id;
  }
}
