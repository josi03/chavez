import { ComponentFixture, TestBed } from '@angular/core/testing';

import { emittentiComponent } from './emittenti.component';

describe('emittentiComponent', () => {
  let component: emittentiComponent;
  let fixture: ComponentFixture<emittentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ emittentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(emittentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});