import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamalEditComponent } from './ramal-edit.component';

describe('RamalEditComponent', () => {
  let component: RamalEditComponent;
  let fixture: ComponentFixture<RamalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
