import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptbarComponent } from './optbar.component';

describe('OptbarComponent', () => {
  let component: OptbarComponent;
  let fixture: ComponentFixture<OptbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
