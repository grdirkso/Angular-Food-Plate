import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  isLoading: boolean = true;
  errorMessage: string;
  foodList: Food[];
  foodGroups: Set<string> = new Set();
  foodListByGroup: Food[];

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit(): void {
    this.getFood();
    this.displayFoods('allFoods');
    // console.log(this.foodService.loadFood());
  }

  getFood(): void {
    this.foodService.getAllFoods<Food[]>()
     .subscribe(
      (food) => {
      this.foodList = food;
      this.getFoodGroups(this.foodList);
      this.displayFoods('allFoods');
     },
     (error) => {
      this.errorMessage = error.message;
      this.handleError(this.errorMessage);
     },
     () => this.isLoading = false
     );
  }

  handleError(err): void {
    console.log(err);
  }

  getFoodGroups(food) {
    food.forEach(food => {
      const group = food.group;
      this.foodGroups.add(group); 
    });
    console.log(this.foodGroups);
  }

  displayFoods(group): void {
    if (group === 'allFoods') {
      this.foodListByGroup = this.foodList;
    } else if(group !== 'allFoods') {
      this.foodListByGroup = this.foodList.filter((foods)=> {
        return foods.group === group;
      });
    }
   }
   

}
