import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataShow } from './user-data-show';

describe('UserDataShow', () => {
  let component: UserDataShow;
  let fixture: ComponentFixture<UserDataShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDataShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDataShow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
