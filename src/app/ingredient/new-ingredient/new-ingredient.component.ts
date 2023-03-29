import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent {
  name?:string='';
  convert_rule?:number=0;

  constructor(
    private ingredientService:IngredientService,
    private router: Router
  ){}

  onSubmit(form:any){
    this.name = form.value.name;
    this.convert_rule = form.value.convert_rule;

    let ingredient : Ingredient = {
      name: this.name,
      convert_rule: this.convert_rule
    };

    this.ingredientService.newIngredient(ingredient).subscribe(
      ingredient => {
        console.log(ingredient);
        this.router.navigate(['/ingredients']);
      }
    )
  }

}
