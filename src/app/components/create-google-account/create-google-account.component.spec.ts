import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGoogleAccountComponent } from './create-google-account.component';

describe('CreateGoogleAccountComponent', () => {
  let component: CreateGoogleAccountComponent;
  let fixture: ComponentFixture<CreateGoogleAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGoogleAccountComponent]
    });
    fixture = TestBed.createComponent(CreateGoogleAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
