import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitNumberComponent } from './submit-number.component';

describe('SubmitNumberComponent', () => {
  let component: SubmitNumberComponent;
  let fixture: ComponentFixture<SubmitNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
