import { Component, OnInit, Input } from '@angular/core';
import { Blogs } from "../blogs";

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input() blogs: Blogs
  blogId: StringConstructor;

  constructor() { }

  ngOnInit(): void {
  }

}
