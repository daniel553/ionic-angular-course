import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipesService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (!params.has('recipeId')) {
        // Redirect to recipes
        return;
      }

      const recipeId = params.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);

    });
  }

}
