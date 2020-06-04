import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Comment } from '../comment.model';
import { CommentsService } from './../comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnDestroy {
  // comments = [
  //   { message: 'First Comment'}
  // ];

  comments: Comment[] = [];
  private commentsSub: Subscription;

  constructor(public commentsService: CommentsService) {}


  ngOnInit() {
    this.commentsService.getComments();
     this.commentsSub = this.commentsService.getCommentUpdateListener().subscribe((comments: Comment[]) => {
        this.comments = comments;
     });
   }

   onDelete(commentId: string) {
     this.commentsService.deleteComment(commentId);
   }

  ngOnDestroy() {
    this.commentsSub.unsubscribe();
  }

}
