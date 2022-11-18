import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDirectorsComponent } from './liste-directors.component';

describe('ListeDirectorsComponent', () => {
  let component: ListeDirectorsComponent;
  let fixture: ComponentFixture<ListeDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDirectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
