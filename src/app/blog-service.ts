
import { Injectable } from '@angular/core';
import { BlogData } from './blog-data';
import { WrittenBlogs } from './mock-blog-data';

@Injectable({ providedIn: 'root' })
export class BlogService {
  blogs: BlogData[] = WrittenBlogs;

  add(newblog: BlogData) {
    this.blogs.push(newblog);
  }

  clear() {
    this.blogs = [];
  }
}
