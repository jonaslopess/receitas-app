import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiUrl = 'http://localhost:3000/ingredients/';

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(this.apiUrl);
  }

  getIngredient(id:any): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${this.apiUrl}/${id}`);
  }

  newIngredient(data:any): Observable<any> {
    return this.http.post(this.apiUrl,data);
  }

  editIngredient(id:any, data:any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`,data);
  }

}
