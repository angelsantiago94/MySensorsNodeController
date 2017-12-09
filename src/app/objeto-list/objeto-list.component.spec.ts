import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetoListComponent } from './objeto-list.component';

describe('ObjetoListComponent', () => {
  let component: ObjetoListComponent;
  let fixture: ComponentFixture<ObjetoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
