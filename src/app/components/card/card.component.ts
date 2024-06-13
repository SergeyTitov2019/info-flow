import {Component, Input} from '@angular/core';
import {Card} from "../../types/card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',

})
export class CardComponent {
  @Input() data!: Card
  icon: string = 'arrow_forward_ios'
  iconDate: string = 'date_range'

}

