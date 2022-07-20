import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquizarRamalComponent } from './pesquizar-ramal.component';

describe('PesquizarRamalComponent', () => {
  let component: PesquizarRamalComponent;
  let fixture: ComponentFixture<PesquizarRamalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquizarRamalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquizarRamalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
