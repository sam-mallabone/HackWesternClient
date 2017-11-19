import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmessageComponent } from './testmessage.component';

describe('TestmessageComponent', () => {
  let component: TestmessageComponent;
  let fixture: ComponentFixture<TestmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
