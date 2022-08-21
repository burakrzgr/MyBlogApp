import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BlogData } from '../blog-data';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.sass']
})
export class EditBlogComponent implements OnInit {
  blog: BlogData | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 0);
    this.blog = this.blogService.get(id);
    if(this.blog == null){
      this.router.navigateByUrl('error/404');
    }
  }

  onUpdateBlog(title: string, content: string, blog?: BlogData): void {
    if (!blog) return;
    blog.header = title;
    blog.text = content;
  }

}
