import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';

import { ListRecipesComponent } 
from './recipe/list-recipes/list-recipes.component';
import { NewRecipeComponent } from './recipe/new-recipe/new-recipe.component';

const routes: Routes = [
  {path:'recipes', component: ListRecipesComponent},
  {path:'new_recipe', component: NewRecipeComponent},
  {path:'edit_recipe/:id', component: EditRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
