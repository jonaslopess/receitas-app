import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  recipes?: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(){
    this.recipeService.getRecipes().subscribe(
      recipes => {
        this.recipes = recipes;
      }
    );

  }

}
