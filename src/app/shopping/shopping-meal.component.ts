import { Component, OnInit } from '@angular/core';
import { Blogs } from "../blogs/blogs";
import { ShoppingMealService } from './shopping-meal.service';

@Component({
  selector: 'app-shopping-meal',
  templateUrl: './shopping-meal.component.html',
  styleUrls: ['./shopping-meal.component.css'],
  providers: [ShoppingMealService]
})
export class ShoppingMealComponent implements OnInit {
   meals: Blogs[] = [];

  constructor(private sms: ShoppingMealService) {}

  ngOnInit(): void {
    this.meals = this.sms.getMeals();
  }

}
