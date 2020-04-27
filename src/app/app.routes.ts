import {RouterModule, Routes} from "@angular/router";
import { BlogsComponent } from './blogs/blogs.component';
import { ShoppingMealComponent } from './shopping/shopping-meal.component';
import { BlogItemComponent } from './blogs/blog-list/blog-item.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';


export const APP_ROUTES: Routes = [
   { path: '', redirectTo: '/blogs', pathMatch: 'full'},
   { path: 'blogs', component: BlogsComponent},
   { path: 'blog-item', component: BlogItemComponent},
   { path: 'shopping-meal', component: ShoppingMealComponent},
   { path: 'posts', component: PostCreateComponent },
   { path: 'search',  component: PostListComponent },
   { path: 'comment/:postId', component: PostCreateComponent },
   { path: 'signup', component: SignupComponent },
   { path: 'login', component: LoginComponent }
]
