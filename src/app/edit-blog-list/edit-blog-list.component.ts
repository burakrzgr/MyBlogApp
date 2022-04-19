import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogData } from '../blog-data';
import { BlogService } from '../blog-service';

@Component({
  selector: 'app-edit-blog-list',
  templateUrl: './edit-blog-list.component.html',
  styleUrls: ['./edit-blog-list.component.sass']
})
export class EditBlogListComponent implements OnInit {

  constructor(public blogService: BlogService,private router: Router) { }

  ngOnInit(): void {
  }

  goToEdit(blog:BlogData){
    this.router.navigateByUrl('/myblogs/'+blog.id);
  }
}
