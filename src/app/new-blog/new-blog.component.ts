import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.sass']
})
export class NewBlogComponent implements OnInit {

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
  }

  onSubmitBlog(title: string, content: string): void {
    this.blogService.add({ author: "Burak", comments: { loading: false, enterNew: false, displayCount: 0, list: [] }, entryDate: new Date(), header: title, id: 99, likes: 0, views: 0, text: content })
  }

}
