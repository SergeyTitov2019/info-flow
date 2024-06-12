import {Component, Input} from '@angular/core';
import {Card} from "../../types/card";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',

})
export class CardComponent {
  @Input() data: Card[] = []
  @Input() imagePath: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq00uXqOWNZb9Hcc-i0DPZk7MRQRyzxNV-3g&s"
  @Input() title: string = 'The Top 100 Software Companies Of 2020'
  @Input() content: string = 'Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...'



}

