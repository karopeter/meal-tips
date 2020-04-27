import { Blogs } from "../blogs/blogs";

export class ShoppingMealService {
  private meals: Blogs[] = [];

  constructor() {}

  getMeals() {
    return this.meals;
  }

  addMeals(meals: Blogs[]) {
   Array.prototype.push.apply(this.meals, meals);
  }
}
