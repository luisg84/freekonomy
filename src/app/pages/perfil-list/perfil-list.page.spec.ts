import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilListPage } from './perfil-list.page';

describe('PerfilListPage', () => {
  let component: PerfilListPage;
  let fixture: ComponentFixture<PerfilListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
