import { Component } from '@angular/core';
import {cards} from "./data/mock-data";
import {Observable} from "rxjs";
import {Card} from "./types/card";
import {CardsService} from "./shared/services/cards.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // cards$: Observable<Card[]> = new Observable<Card[]>()
cards = cards
  constructor(private cardService: CardsService) {}

  ngOnInit() {
    // this.cards$ = this.cardService.getAll()
    // this.cards = this.cardService.getAll()
  }
}
