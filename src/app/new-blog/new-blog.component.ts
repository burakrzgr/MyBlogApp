import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.sass']
})
export class NewBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitBlog(title: string, content: string): void {

  }

}
