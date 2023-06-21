import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeiraConstruconComponent } from './feira-construcon.component';

describe('FeiraConstruconComponent', () => {
  let component: FeiraConstruconComponent;
  let fixture: ComponentFixture<FeiraConstruconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeiraConstruconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeiraConstruconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
