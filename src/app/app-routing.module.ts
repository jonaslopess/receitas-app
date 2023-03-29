import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListIngredientsComponent } from './ingredient/list-ingredients/list-ingredients.component';
import { NewIngredientComponent } from './ingredient/new-ingredient/new-ingredient.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';

import { ListRecipesComponent } 
from './recipe/list-recipes/list-recipes.component';
import { NewRecipeComponent } from './recipe/new-recipe/new-recipe.component';

const routes: Routes = [
  {path:'recipes', component: ListRecipesComponent},
  {path:'new_recipe', component: NewRecipeComponent},
  {path:'edit_recipe/:id', component: EditRecipeComponent},
  {path:'ingredients', component: ListIngredientsComponent},
  {path:'new_ingredient', component: NewIngredientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
