import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Star Anise' , 5 ),
    new Ingredient('PepperCorns' , 10 )];

  onAddedIngredient(ingre: Ingredient) {
    this.ingredients.push(ingre);
  }
  constructor() { }

  ngOnInit() {
  }

}
