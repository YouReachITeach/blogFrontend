import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyAlbum } from './weekly-album';

describe('WeeklyAlbum', () => {
  let component: WeeklyAlbum;
  let fixture: ComponentFixture<WeeklyAlbum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyAlbum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyAlbum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
