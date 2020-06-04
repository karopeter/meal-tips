import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent {
   enteredComment = '';
   enteredName = '';
   enteredEmail = '';
   enteredResponse = '';

   constructor(public commentsService: CommentsService) {}


   onAddComment(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.commentsService.addComment(form.value.comment, form.value.name, form.value.email, form.value.response);
    form.resetForm();
   }
}
