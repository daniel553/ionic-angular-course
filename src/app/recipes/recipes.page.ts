import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
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

}
