import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

/**
 * Recipes service injectable that is provided in root (all pages can consume)
 *
 * @export
 * @class RecipesService
 */
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[];

  constructor() {
    this.recipes = [];
    let n = 10;
    while (n > 0) {
      const recipe = new Recipe();
      recipe.id = n.toString();
      recipe.title = 'Recipe ' + n;
      recipe.ingridients = ['Ing 1', 'Ing 2'];
      recipe.imageUrl = 'https://static.fjcdn.com/pictures/Oh+hi+thar+sdfdsf+wfwsf+weewr+werwe+wer_5f6e25_3695356.jpg';

      this.recipes.push(recipe);
      n--;
    }
  }


  /**
   * Gets a copy of all recipies array
   */
  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  /**
   * Gets the recipe copy
   * @param recipeId - identifier
   */
  getRecipe(recipeId: string) {
    return { ...this.recipes.find(r => r.id === recipeId) };
  }

  /**
   * Removes a recipe from list of recipes
   *
   * @param {string} recipeId
   * @memberof RecipesService
   */
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(r => r.id !== recipeId);
  }
}
