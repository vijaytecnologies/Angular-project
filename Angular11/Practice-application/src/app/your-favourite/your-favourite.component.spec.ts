import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFavouriteComponent } from './your-favourite.component';

describe('YourFavouriteComponent', () => {
  let component: YourFavouriteComponent;
  let fixture: ComponentFixture<YourFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourFavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
