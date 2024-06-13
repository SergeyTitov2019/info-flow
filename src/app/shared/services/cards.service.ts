import { Injectable } from '@angular/core';
import { cards } from "../../data/mock-data";
import { Card } from "../../types/card";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: Card[] = cards

  getById(id: string){
    return this.cards.filter(i => i.id === id)
  }
}
