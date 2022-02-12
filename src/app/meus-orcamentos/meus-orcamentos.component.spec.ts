import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusOrcamentosComponent } from './meus-orcamentos.component';

describe('MeusOrcamentosComponent', () => {
  let component: MeusOrcamentosComponent;
  let fixture: ComponentFixture<MeusOrcamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusOrcamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusOrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
