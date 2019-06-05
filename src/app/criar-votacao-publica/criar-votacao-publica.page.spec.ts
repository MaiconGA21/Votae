import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarVotacaoPublicaPage } from './criar-votacao-publica.page';

describe('CriarVotacaoPublicaPage', () => {
  let component: CriarVotacaoPublicaPage;
  let fixture: ComponentFixture<CriarVotacaoPublicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarVotacaoPublicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarVotacaoPublicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
