import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListMedia } from './user-list-media';

describe('UserListMedia', () => {
  let component: UserListMedia;
  let fixture: ComponentFixture<UserListMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
