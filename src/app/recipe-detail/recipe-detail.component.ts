import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../recipe.service';

import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipes: string[];
  savedlist: any[] = [];

  constructor(private _recipeService : RecipeService, private route: ActivatedRoute, private _location : Location ) { }

  ngOnInit() {
  	const idMeal = this.route.snapshot.params["idMeal"];

    this._recipeService.getDetail(idMeal).subscribe(
    	 data => this.searchComplete(data))
  	};

  searchComplete(data) { 
  	 this.recipes = data.meals;
  	 console.log(data.meals);
  }

  saveRecipe() {
    const strMeal = this.route.snapshot.params["strMeal"];
    const savedlist = [];
    savedlist.push(strMeal);
    console.log(savedlist);
  } 

  goBack(): void {
    this._location.back();
  }

  

}
