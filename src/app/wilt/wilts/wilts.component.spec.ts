import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiltsComponent } from './wilts.component';

describe('WiltsComponent', () => {
  let component: WiltsComponent;
  let fixture: ComponentFixture<WiltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiltsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
