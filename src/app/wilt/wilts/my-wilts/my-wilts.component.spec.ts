import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWiltsComponent } from './my-wilts.component';

describe('MyWiltsComponent', () => {
  let component: MyWiltsComponent;
  let fixture: ComponentFixture<MyWiltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWiltsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWiltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
