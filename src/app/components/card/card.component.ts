import { Component, Input } from '@angular/core';
import { Article } from "../../types/card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',

})
export class CardComponent {
  @Input() data!: Article
  icon = 'arrow_forward_ios'
  iconDate = 'date_range'
}

