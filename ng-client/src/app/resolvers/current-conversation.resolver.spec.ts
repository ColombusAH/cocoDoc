import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { currentConversationResolver } from './current-conversation.resolver';

describe('currentConversationResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => currentConversationResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
