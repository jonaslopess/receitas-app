import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecipesComponent } from './recipe/list-recipes/list-recipes.component';
import { RecipeService } from './recipe/recipe.service';
import { NewRecipeComponent } from './recipe/new-recipe/new-recipe.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';
import { ListIngredientsComponent } from './ingredient/list-ingredients/list-ingredients.component';
import { NewIngredientComponent } from './ingredient/new-ingredient/new-ingredient.component';


@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    NewRecipeComponent,
    EditRecipeComponent,
    ListIngredientsComponent,
    NewIngredientComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule 
  ],
  providers: [
    RecipeService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
