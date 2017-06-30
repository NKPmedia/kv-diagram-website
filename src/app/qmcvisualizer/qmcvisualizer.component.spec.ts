import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QMCVisualizerComponent } from './qmcvisualizer.component';

describe('QMCVisualizerComponent', () => {
  let component: QMCVisualizerComponent;
  let fixture: ComponentFixture<QMCVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QMCVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QMCVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
