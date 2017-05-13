import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLogicPhraseInfoComponent } from './basic-logic-phrase-info.component';

describe('BasicLogicPhraseInfoComponent', () => {
  let component: BasicLogicPhraseInfoComponent;
  let fixture: ComponentFixture<BasicLogicPhraseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLogicPhraseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLogicPhraseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
