import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service';

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
          x.comments.displayCount = x.comments.displayCount??0 + 5;
        }, 3000);
      } 
    });
  }
  closeNewComment() {
    this.blogService.blogs.forEach(x => {
      x.comments.enterNew = false;
    });
  }
  newComment(id: number) {
    this.blogService.blogs.forEach(x => {
      x.comments.enterNew = x.id === id ? !x.comments.enterNew : false;
    });
  }

  onSubmitComment(id: number, text: string): void {
    this.blogService.blogs.forEach(x => {
      x.id === id ?? x.comments.list?.push({ text: text, writer: "Burak", submitDate: new Date() });
    });
    this.closeNewComment();
  }
}
