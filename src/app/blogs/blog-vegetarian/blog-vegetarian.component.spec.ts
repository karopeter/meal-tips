import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogVegetarianComponent } from './blog-vegetarian.component';

describe('BlogVegetarianComponent', () => {
  let component: BlogVegetarianComponent;
  let fixture: ComponentFixture<BlogVegetarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogVegetarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogVegetarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
