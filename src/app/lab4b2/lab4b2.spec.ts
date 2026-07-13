import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4b2 } from './lab4b2';

describe('Lab4b2', () => {
  let component: Lab4b2;
  let fixture: ComponentFixture<Lab4b2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab4b2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab4b2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
