import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}

  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  ngOnInit(): void {
    console.log(this.recipe);
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
