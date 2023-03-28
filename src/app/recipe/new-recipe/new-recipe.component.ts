import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {
  title : string = ''
  description : string = ''

  constructor(private recipeService: RecipeService,
    private router:Router){  }
  

  onSubmit(form: any){
    this.title = form.value.title;
    this.description = form.value.description;

    let recipe = new Recipe(this.title,this.description); 

    this.recipeService.newRecipe(recipe).subscribe(
      recipe => {
        console.log(recipe);
        this.router.navigate(['']);
      }
    )

    
  }

}
