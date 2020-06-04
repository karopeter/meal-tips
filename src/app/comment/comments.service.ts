import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Comment } from './comment.model';

@Injectable({providedIn: 'root'})
export class CommentsService {
   private comments: Comment[] = [];
   private commentsUpdated = new Subject<Comment[]>();

   constructor(private http: HttpClient) {}

   getComments() {
     this.http.get<{message: string, comments: any}>('http://localhost:5000/api/v1/comments').pipe(map((commentData) => {
       return commentData.comments.map(comment => {
         return {
           message: comment.message,
           name: comment.name,
           email: comment.email,
           response: comment.response,
           id: comment._id
         };
       });
     })).subscribe(transformedComments => {
       this.comments = transformedComments;
       this.commentsUpdated.next([...this.comments]);
     });
   }


   getCommentUpdateListener() {
     return this.commentsUpdated.asObservable();
   }


   addComment(message: string, name: string, email: string, response: string) {
     const comment: Comment = { id: null,  message: message, name: name, email: email, response: response};
     this.http.post<{ message: string, commentId: string }>('http://localhost:5000/api/v1/comments', comment).subscribe(responseData => {
        const id = responseData.commentId;
        comment.id = id;
        this.comments.push(comment);
        this.commentsUpdated.next([...this.comments]);
    });
   }

   deleteComment(commentId: string) {
      this.http.delete('http://localhost:5000/api/v1/comments/' + commentId).subscribe(() => {
        const updatedComments = this.comments.filter(comment => comment.id !== commentId);
        this.comments = updatedComments;
        this.commentsUpdated.next([...this.comments]);
      });
   }
}



