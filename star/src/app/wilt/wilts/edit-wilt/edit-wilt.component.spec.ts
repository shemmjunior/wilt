import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWiltComponent } from './edit-wilt.component';

describe('EditWiltComponent', () => {
  let component: EditWiltComponent;
  let fixture: ComponentFixture<EditWiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWiltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
