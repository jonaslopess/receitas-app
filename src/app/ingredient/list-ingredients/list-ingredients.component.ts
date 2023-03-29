import { Component } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.css']
})
export class ListIngredientsComponent {

  ingredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) {
    this.ingredientService.getIngredients().subscribe(
      ingredients => this.ingredients = ingredients
    );
  }

}
