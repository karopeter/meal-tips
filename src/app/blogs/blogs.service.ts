import { Injectable } from '@angular/core';
import { Blogs } from "./blogs";

@Injectable()
export class BlogsService {
  private blog: Blogs[] = [];

  constructor() {}

  getBlog() {
    return this.blog;
  }
}
