import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogListComponent } from './edit-blog-list.component';

describe('EditBlogListComponent', () => {
  let component: EditBlogListComponent;
  let fixture: ComponentFixture<EditBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBlogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
