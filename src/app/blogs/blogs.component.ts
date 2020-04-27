import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
    header: string;
    calendar: string;
    long: string;
    paragraph: string;
    description: string;
    diet: string;
    vegan: string;
    invite: string;
    nutrition: string;
    meat: string;
    weight: string;


  constructor() {
    this.header = 'Meal Plans';
    this.calendar = 'CALENDAR BASED PLAN';
    this.long = 'These blog utilizes health meal plans for all living being online calendar system following you to access your meal plan from anywhere in the world';
    this.paragraph = 'This Healthy Meal Calendar Based plan, built with registered dietitians and nutritionist, is a healthy, plant  based meal  plan which detailed 3 meals, and 3 snacks, every day for four weeks. There is a corresponding downloadable and printable grocery list for each week, and there are differnt calorie allotments to choose from so that you can customize these plants to meet your exact goals(weight loss, gain, or maintenance). We have also inculded suggestions for modifying for food allergies, intolerance, and availability, as well as food costs, cooking for a family, and more. Couple this Week Meal Plan with one of our Healthy Meal Tips for best results.';
    this.description = 'Built with registered dietitians and nutritionists, this healthy, clean-eating meal plan details 3 meals, and 3 snacks, everyday for four weeks. There is a corresponding grocery list for each week, and there are 5 different calorie allotments to choose from so that you can customize this plan to meet you exact goals (weight loss, gain, or maintenance). Includes suggestions for modifying for food allergies, intolerance, and availability, as well as food costs, cooking for a family, and more. Couple this 4 Week Meal Plan with our 8 Week Fat Loss Programs for foolproof results.';
    this.diet = 'This is a great vegan take on the traditional meat based chili soup, with way more health benefits. It uses natural, plant based sources of protein. All the ingredients in this recipe add to your bodys intake not only of loads of protein, but also fiber, vitamins, minerals, iron and capisicum (great for your bodys metabiolic rate). The ingredients in this healthy chili may boost your endorphin and serotonin levels, reduce your cravings for sugars and fat, boost your immune system, regulate your blood sugar and clear congestion.';
    this.vegan = 'Quinoa is a great little super-grain to supply you with more fiber (almost twice as much as other grains), as well as incredible protein, since it is a complete protein which has all nine of the essential amino acids that our body needs for good health. It is also high in iron, lysine (for tissue growth and repair), magnesium, riboflavin and manganese. Important to know is that quinoa is also gluten-free. Its a wonderfully versatile food, and it adds a lovely texture to this chili dish.';
    this.invite = 'At health meal tips, the more merrier. Invite all your friends: for more health meal tips and good health is also advisable for you and your loved once.';
    this.nutrition = 'Nutrition Powerhouse Beet Veggie Burger Serve you warm bowl of healthy vegan chili with some warm, crusty bread - even better if its homemade! Some guacamole on this side wouldn`t go amiss either, especially in keeping with the Mexican theme.';
    this.meat = 'Type: Vegan - though you can always add your favorite meat to make it omnivore Serves: 2 (We recommend doubling or tripling the recipe for great tasting leftovers!)';
    this.weight = 'Before I even start into this message, I want to be clear that I believe that something different works for each of us. Just because a weight loss method or strategy is on this list, does not mean that that method could not potentially help a certain portion of the population.'

  }

  ngOnInit(): void {
  }

}
