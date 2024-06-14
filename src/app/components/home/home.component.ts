import { Component } from '@angular/core';
import {cards} from "../../data/mock-data";
import {Observable} from "rxjs";
import {CardsService} from "../../shared/services/cards.service";
import {Article} from "../../types/card";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // cards = cards
  searchStr: string = ''

  // posts$: Observable<any> = new Observable<any>()
  cards$: Observable<any> = this.cardsService.getArticles();

  constructor(private cardsService: CardsService) {}

  // ngOnInit() {
  //   this.posts$ = this.cardsService.getArticles()
  // }
}
