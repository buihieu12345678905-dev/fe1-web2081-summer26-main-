import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStory } from './app-story';

describe('AppStory', () => {
  let component: AppStory;
  let fixture: ComponentFixture<AppStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppStory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
