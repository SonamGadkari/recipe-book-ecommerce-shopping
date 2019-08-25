import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  recipes: Recipe[] = [new Recipe('A test Recipe', 'This is good recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Authentic Recipe', 'This is good recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')];
  @Output() recipeValue = new EventEmitter<Recipe>();
  constructor() { }
  recipeWasClicked(recipe: Recipe) {
    this.recipeValue.emit(recipe);
  }
  getrecipeName(onerecipe: Recipe ) {
    return onerecipe.name;
  }
  getrecipeDescription(onerecipe: Recipe) {
    return onerecipe.description;
  }
  getimagePath(onerecipe: Recipe ) {
    return onerecipe.imagePath;
  }
  ngOnInit() {
  }

}
