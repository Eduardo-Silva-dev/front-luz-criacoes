import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireFestivalComponent } from './fire-festival.component';

describe('FireFestivalComponent', () => {
  let component: FireFestivalComponent;
  let fixture: ComponentFixture<FireFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireFestivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
