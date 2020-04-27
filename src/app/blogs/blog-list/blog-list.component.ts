import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blogs } from "../blogs";
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blog: Blogs[] = [];
  @Output() blogsSelected = new EventEmitter<Blogs>();

  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
    this.blog = this.blogService.getBlog();
  }

  onSelected() {
    this.blogsSelected.emit();
  }
}
