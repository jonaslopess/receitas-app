import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import{ Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes/';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRecipe(id:string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  newRecipe(data:Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl,data);
  }

  editRecipe(id:string, data:Recipe): Observable<Recipe> {
    return this.http.patch<Recipe>(`${this.apiUrl}/${id}`,data);
  }

}
