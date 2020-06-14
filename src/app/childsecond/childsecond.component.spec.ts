import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsecondComponent } from './childsecond.component';

describe('ChildsecondComponent', () => {
  let component: ChildsecondComponent;
  let fixture: ComponentFixture<ChildsecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildsecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
