import { TestBed, getTestBed } from '@angular/core/testing';
import { random, internet } from 'faker';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let injector: TestBed;
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    });

    injector = getTestBed();
    service = TestBed.get(AuthService);
    httpMock = injector.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set access token to subject after success login', () => {
    const accessToken = random.uuid();
    service.login({email: internet.email(), password: random.word()});

    const req = httpMock.expectOne('/login');
    expect(req.request.method).toBe('POST');
    req.flush({accessToken});

    service.accessToken$.subscribe((token) => {
      expect(token).toEqual(accessToken);
    });
  });
});
