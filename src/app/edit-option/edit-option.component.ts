import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogData } from '../blog-data';

@Component({
  selector: 'app-edit-option',
  templateUrl: './edit-option.component.html',
  styleUrls: ['./edit-option.component.sass']
})
export class EditOptionComponent implements OnInit {
  @Input() blog? : BlogData;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToEdit(blog?:BlogData){
    if(blog != null)
      this.router.navigateByUrl('/myblogs/'+blog.id);
    else
      this.router.navigateByUrl('/404');
  }
}
