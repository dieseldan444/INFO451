import { TestBed } from '@angular/core/testing';

import { InMemoryTodoDataService } from './in-memory-todo-data.service';

describe('InMemoryTodoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryTodoDataService = TestBed.get(InMemoryTodoDataService);
    expect(service).toBeTruthy();
  });
});
