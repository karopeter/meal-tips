import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogItemComponent } from './blogs/blog-list/blog-item.component';
import { FooterComponent } from './footer.component';
import { ShoppingMealComponent } from './shopping/shopping-meal.component';
import { ShoppingMealTipsComponent } from './shopping/shopping-meal-tips.component';
import { BlogVegetarianComponent } from './blogs/blog-vegetarian/blog-vegetarian.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './blogs/highlight.directive';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListComponent } from './posts/post-list/post-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AuthGuard } from './auth/auth.guard';
import { CommentCreateComponent } from './comment/comment-create/comment-create.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogsComponent,
    BlogListComponent,
    BlogItemComponent,
    FooterComponent,
    ShoppingMealComponent,
    ShoppingMealTipsComponent,
    BlogVegetarianComponent,
    HighlightDirective,
    PostCreateComponent,
    PostListComponent,
    SignupComponent,
    LoginComponent,
    CommentCreateComponent,
    CommentListComponent,
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/blogs', pathMatch: 'full'},
      { path: 'blogs', component: BlogsComponent},
      { path: 'blog-item', component: BlogItemComponent},
      { path: 'shopping-meal', component: ShoppingMealComponent},
      { path: 'posts', component: PostCreateComponent, canActivate: [AuthGuard] },
      { path: 'search', component: PostListComponent },
      { path: 'comments/:postId', component: CommentCreateComponent, canActivate: [AuthGuard] },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'vegetarian', component: BlogVegetarianComponent }
    ]),
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
