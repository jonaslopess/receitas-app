import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {
  id : string = ''
  inscricao: Subscription | undefined

  title : string = ''
  description : string = ''

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router:Router
  ){  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe( 
			(params) => {
				this.id = params['id'];
				this.recipeService.getRecipe(this.id).subscribe(
          recipe => {
            if(recipe){
              this.title = recipe.title
              this.description = recipe.description
            } else {
              this.router.navigate(['/recipes']);
            }
          }
        )
				
			}
		)
  }
  

  onSubmit(form: any){
    this.title = form.value.title;
    this.description = form.value.description;

    let recipe = new Recipe(this.id, this.title,this.description); 

    this.recipeService.editRecipe(this.id, recipe).subscribe(
      recipe => {
        console.log(recipe);
        this.router.navigate(['/recipes']);
      }
    )
  }

}
