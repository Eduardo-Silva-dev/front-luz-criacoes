import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusFestivalComponent } from './campus-festival.component';

describe('CampusFestivalComponent', () => {
  let component: CampusFestivalComponent;
  let fixture: ComponentFixture<CampusFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusFestivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
