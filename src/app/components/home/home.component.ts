import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { CardsService} from "../../shared/services/cards.service";
import { Article } from "../../types/card";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  searchStr = ''
  cards$: Observable<Article[]> = this.cardsService.getArticles();

  constructor(private cardsService: CardsService) {}

}
