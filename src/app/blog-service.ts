
import { Injectable } from '@angular/core';
import { BlogData } from './blog-data';

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


export const WrittenBlogs: BlogData[] = [
  { id: 1, author: 'Burak',entryDate : new Date(), text : "First Test enntry!!!"},
  { id: 2, author: 'Narco' ,entryDate : new Date(), text : "First Test enntry!!!"},
  { id: 3, author: 'Bombasto',entryDate : new Date(), text : "First Test enntry!!!" },
  { id: 4, author: 'Celeritas',entryDate : new Date(), text : "First Test enntry!!!" },
  { id: 5, author: 'Magneta' ,entryDate : new Date(), text : "First Test enntry!!!"},
];
