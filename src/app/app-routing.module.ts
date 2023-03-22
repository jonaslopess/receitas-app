import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListRecipesComponent } 
from './recipe/list-recipes/list-recipes.component';

const routes: Routes = [
  {path:'recipes', component: ListRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
