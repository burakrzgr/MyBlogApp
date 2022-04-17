import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service';
import { formatDate } from "@angular/common";
import { BlogData } from '../blog-data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
  }

  openComment(id: number) {
    this.blogService.blogs.forEach(x => {
      if( x.id === id){
        x.comments.loading = true;
        setTimeout(()=>{ 
          x.comments.displayCount = (x.comments.displayCount??0) + 3;
          x.comments.loading = false;
        }, 1500);
      } 
    });
  }
  closeNewComment() {
    this.blogService.blogs.forEach(x => {
      x.comments.enterNew = false;
    });
  }
  newComment(blog: BlogData) {
    this.closeNewComment();
    blog.comments.enterNew = !blog.comments.enterNew;
  }

  onSubmitComment(blog: BlogData, text: string): void {
    blog.comments.list?.push({ text: text, writer: "Burak", submitDate: new Date() });
    this.closeNewComment();
  }
  formatThisDate(value: Date, format: string):string{
    return formatDate(value,format,'en-US')
  }
  likeBlog(blog: BlogData){
    blog.likes++;
  }
}
