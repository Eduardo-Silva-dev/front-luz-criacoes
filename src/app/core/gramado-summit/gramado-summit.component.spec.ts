import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GramadoSummitComponent } from './gramado-summit.component';

describe('GramadoSummitComponent', () => {
  let component: GramadoSummitComponent;
  let fixture: ComponentFixture<GramadoSummitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GramadoSummitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GramadoSummitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
