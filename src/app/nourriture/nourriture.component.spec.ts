import { ComponentFixture, TestBed } from '@angular/core/testing';

import {NourritureComponent } from './nourriture.component';

describe('ProduitsComponent', () => {
  let component: NourritureComponent;
  let fixture: ComponentFixture<NourritureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NourritureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NourritureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
