import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStory } from './app-story';

describe('AppStory', () => {
  let component: AddStory;
  let fixture: ComponentFixture<AddStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
