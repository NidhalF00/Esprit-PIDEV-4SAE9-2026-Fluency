import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Quiz, QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(QuizService);
    httpMock = TestBed.inject(HttpTestingController);
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request to fetch all quizzes', () => {
    const mockQuizzes: Quiz[] = [
      { id: 1, title: 'Placement Quiz', passingScore: 70, questions: [] }
    ];

    service.getAllQuizzes().subscribe((quizzes) => {
      expect(quizzes).toEqual(mockQuizzes);
    });

    const req = httpMock.expectOne('http://localhost:8090/api/quiz/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockQuizzes);
  });

  it('should send a POST request with authorization header when creating a quiz', () => {
    localStorage.setItem('token', 'fake-token');

    const quizToCreate: Quiz = {
      id: 0,
      title: 'New Quiz',
      passingScore: 70,
      questions: []
    };

    const savedQuiz: Quiz = {
      ...quizToCreate,
      id: 10
    };

    service.createQuiz(quizToCreate).subscribe((quiz) => {
      expect(quiz).toEqual(savedQuiz);
    });

    const req = httpMock.expectOne('http://localhost:8090/api/quiz');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(quizToCreate);
    expect(req.request.headers.get('Authorization')).toBe('Bearer fake-token');
    req.flush(savedQuiz);
  });
});
