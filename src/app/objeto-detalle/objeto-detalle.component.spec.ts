import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetoDetalleComponent } from './objeto-detalle.component';

describe('ObjetoDetalleComponent', () => {
  let component: ObjetoDetalleComponent;
  let fixture: ComponentFixture<ObjetoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
