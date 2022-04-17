import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: NewBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
