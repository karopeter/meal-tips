import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-vegetarian',
  templateUrl: './blog-vegetarian.component.html',
  styleUrls: ['./blog-vegetarian.component.css']
})
export class BlogVegetarianComponent  {
   placeholder: string;
   structure: string;
   formation: string;
   black: string;
   fries: string;

  constructor() {
    this.placeholder = 'Fresh Recipes Delivered Daily To Your Inbox';
    this.structure = 'Meals You will Love';
    this.formation = 'Baba ghanoush';
    this.black = 'Black rice paella';
    this.fries = 'Tiramisu';
  }

  storedComments = [];

  onCommentAdded(comment) {
    this.storedComments.push(comment);
  }

}
