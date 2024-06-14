import { Component, inject, OnInit } from '@angular/core';
import { Observable, switchMap } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { CardsService } from "../../shared/services/cards.service";
import { Article } from "../../types/card";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})

export class CardDetailComponent implements OnInit {

  icon = 'arrow_back_ios'
  cardInfo$: Observable<Article> = new Observable<Article>()
  private route = inject(ActivatedRoute)
  private cardsService = inject(CardsService)


  ngOnInit() {
    this.cardInfo$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.cardsService.getArticleById(params['id'])
      }))
  }
}
