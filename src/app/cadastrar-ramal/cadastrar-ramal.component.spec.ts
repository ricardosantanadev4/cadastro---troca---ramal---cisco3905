import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarRamalComponent } from './cadastrar-ramal.component';

describe('CadastrarRamalComponent', () => {
  let component: CadastrarRamalComponent;
  let fixture: ComponentFixture<CadastrarRamalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarRamalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarRamalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
