import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RecipesPage implements OnInit, OnDestroy {

  recipes: Recipe[];
  recipesSub: Subscription;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    this.recipesSub = this.recipesService.getRecipesObservable().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  ionViewWillEnter(){
   console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(): void {
    if (this.recipesSub) {
      this.recipesSub.unsubscribe();
    }

    console.log('ngOnDestroy');
  }

}
