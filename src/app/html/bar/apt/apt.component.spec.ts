import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptComponent } from './apt.component';

describe('AptComponent', () => {
  let component: AptComponent;
  let fixture: ComponentFixture<AptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
