import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { SplashComponent } from './splash/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { MatIconModule } from '@angular/material/icon';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { EditBlogListComponent } from './edit-blog-list/edit-blog-list.component';
import { EditOptionComponent } from './edit-option/edit-option.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { NoPermissionComponent } from './error/no-permission/no-permission.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    SplashComponent,
    NewBlogComponent,
    EditBlogComponent,
    EditBlogListComponent,
    EditOptionComponent,
    NotFoundComponent,
    NoPermissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
