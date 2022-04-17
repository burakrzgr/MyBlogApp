
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
  get(id:number):BlogData{
    return this.blogs.filter(x => {return(x.id === id)})[0];
  }
  
}
