import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWiltComponent } from './post-wilt.component';

describe('PostWiltComponent', () => {
  let component: PostWiltComponent;
  let fixture: ComponentFixture<PostWiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostWiltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
