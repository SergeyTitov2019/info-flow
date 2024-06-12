import {Component, Input} from '@angular/core';
import {Card} from "../../types/card";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',

})
export class CardComponent {
  @Input() data: Card[] = []
  @Input() date: number = 0
  @Input() imagePath: string = ''
  @Input() title: string = ''
  @Input() content: string = ''



}

