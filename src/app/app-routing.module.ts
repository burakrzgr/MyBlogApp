import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { EditBlogListComponent } from './edit-blog-list/edit-blog-list.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { NoPermissionComponent } from './error/no-permission/no-permission.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: NewBlogComponent },
  { path: 'myblogs', component: EditBlogListComponent },
  { path: 'myblogs/:id', component: EditBlogComponent },
  { path: 'error/404', component: NotFoundComponent },
  { path: 'error/403', component: NoPermissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
