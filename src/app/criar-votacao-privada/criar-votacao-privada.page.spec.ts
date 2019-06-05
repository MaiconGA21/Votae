import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarVotacaoPrivadaPage } from './criar-votacao-privada.page';

describe('CriarVotacaoPrivadaPage', () => {
  let component: CriarVotacaoPrivadaPage;
  let fixture: ComponentFixture<CriarVotacaoPrivadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarVotacaoPrivadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarVotacaoPrivadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
