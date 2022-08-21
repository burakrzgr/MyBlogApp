import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogData } from '../blog-data';

@Component({
  selector: 'app-edit-option',
  templateUrl: './edit-option.component.html',
  styleUrls: ['./edit-option.component.sass']
})
export class EditOptionComponent implements OnInit {

  constructor(public blog: BlogData,private router: Router) { }

  ngOnInit(): void {
  }
  goToEdit(blog:BlogData){
    this.router.navigateByUrl('/myblogs/'+blog.id);
  }
}
