import {Component} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component(
  {
    selector: 'app-recipes-list',
    templateUrl: 'recipes-list.component.html'
  }
)
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('Pudding', 'This is a pudding recipe',
      'https://thepioneerwoman.com/wp-content/uploads/2016/04/' +
      'how-to-make-chocolate-pudding-00a.jpg?resize=780%2C521?w=1024'),
    new Recipe('Omlette', 'The Omlette recipe', 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/' +
      'wp-content/uploads/basic-french-omelet-930x550.jpg')
  ];
}
