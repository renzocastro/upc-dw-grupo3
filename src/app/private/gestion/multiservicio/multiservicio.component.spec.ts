import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiservicioComponent } from './multiservicio.component';

describe('MultiservicioComponent', () => {
  let component: MultiservicioComponent;
  let fixture: ComponentFixture<MultiservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiservicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
