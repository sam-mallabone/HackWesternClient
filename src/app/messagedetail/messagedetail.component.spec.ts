import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagedetailComponent } from './messagedetail.component';

describe('MessagedetailComponent', () => {
  let component: MessagedetailComponent;
  let fixture: ComponentFixture<MessagedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
