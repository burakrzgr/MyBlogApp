import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.sass']
})
export class EditBlogComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 0);
    this.blogService.getBlog(id);
     // .subscribe(hero => this.hero = hero);
  }

}
