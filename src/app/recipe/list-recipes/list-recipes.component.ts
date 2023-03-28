import { Component } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent {
  recipes: Recipe[] = []

  constructor(private recipeService: RecipeService) {

    recipeService.getRecipes().subscribe(
      recipes => {
        this.recipes = recipes.sort(
          (a,b)=>(a.title > b.title) ? 1 : -1
        );
      }
    );

  }

}
