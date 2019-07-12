import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [new Ingredient('apples', 5),
    new Ingredient('tomato', 2),
    new Ingredient('lemon', 1),
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
