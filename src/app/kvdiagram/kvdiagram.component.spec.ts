import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KVDiagramComponent } from './kvdiagram.component';

describe('KVDiagramComponent', () => {
  let component: KVDiagramComponent;
  let fixture: ComponentFixture<KVDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KVDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KVDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
