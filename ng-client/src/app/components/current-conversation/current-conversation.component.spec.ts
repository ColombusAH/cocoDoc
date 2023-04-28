import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentConversationComponent } from './current-conversation.component';

describe('CurrentConversationComponent', () => {
  let component: CurrentConversationComponent;
  let fixture: ComponentFixture<CurrentConversationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentConversationComponent]
    });
    fixture = TestBed.createComponent(CurrentConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
