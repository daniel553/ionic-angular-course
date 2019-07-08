import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipesService: RecipesService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (!params.has('recipeId')) {
        // Redirect to recipes
        this.router.navigate(['/recipes']);
        return;
      }

      const recipeId = params.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);

    });
  }


  onDeleteRecipe(recipeId: string) {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete', handler: () => {

            this.recipesService.deleteRecipe(recipeId);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }


}
