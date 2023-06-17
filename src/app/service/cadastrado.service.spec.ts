import { TestBed } from '@angular/core/testing';

import { CadastradoService } from './cadastrado.service';

describe('CadastradoService', () => {
  let service: CadastradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
