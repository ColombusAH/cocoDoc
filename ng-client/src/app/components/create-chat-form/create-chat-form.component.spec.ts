import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChatFormComponent } from './create-chat-form.component';

describe('CreateChatFormComponent', () => {
  let component: CreateChatFormComponent;
  let fixture: ComponentFixture<CreateChatFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChatFormComponent]
    });
    fixture = TestBed.createComponent(CreateChatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
