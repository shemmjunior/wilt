import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavWiltsComponent } from './fav-wilts.component';

describe('FavWiltsComponent', () => {
  let component: FavWiltsComponent;
  let fixture: ComponentFixture<FavWiltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavWiltsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavWiltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
