import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParDirectorComponent } from './recherche-par-director.component';

describe('RechercheParDirectorComponent', () => {
  let component: RechercheParDirectorComponent;
  let fixture: ComponentFixture<RechercheParDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParDirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
