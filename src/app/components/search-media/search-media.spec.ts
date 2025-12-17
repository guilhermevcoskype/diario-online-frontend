import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedia } from './search-media';

describe('SearchMedia', () => {
  let component: SearchMedia;
  let fixture: ComponentFixture<SearchMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
