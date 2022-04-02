import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiserviciosComponent } from './multiservicios.component';

describe('MultiserviciosComponent', () => {
  let component: MultiserviciosComponent;
  let fixture: ComponentFixture<MultiserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
