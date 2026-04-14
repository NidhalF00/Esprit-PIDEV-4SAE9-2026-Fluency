import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Answer {
  id: number;
  text: string;
  correct: boolean;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Quiz {
  id: number;
  title: string;
  passingScore: number;
  questions: Question[];
  
}
export interface Course {
  id: number;
  title: string;
  passingScore: number;
  quiz: Quiz[];
  
}

export interface AssignQuizPayload {
  quizId: number;
  studentId: string;
  tutorId: string;
}

export interface AssignedQuiz {
  quizId: number;
  title: string;
  passingScore: number;
  courseId: number | null;
  assignedAt: string;
}
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl = "http://localhost:8056/api/quizzes";
  private attemptUrl = "http://localhost:8056/api/quiz-attempts";
  private assignmentUrl = "http://localhost:8056/api/quiz-assignments";

  constructor(private http: HttpClient) {}

  getAllQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.apiUrl);
  }

  getQuizById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/${id}`);
  }

  createQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.apiUrl, quiz);
  }

  updateQuiz(id: number, quiz: Quiz): Observable<Quiz> {
    return this.http.put<Quiz>(`${this.apiUrl}/${id}`, quiz);
  }

  deleteQuiz(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  submitQuiz(payload: any): Observable<any> {
    return this.http.post(`${this.attemptUrl}/submit`, payload);
  }
  getQuizQuestions(quizId: number): Observable<Question[]> {
  return this.http.get<Question[]>(`${this.apiUrl}/${quizId}/questions`);
}
getAnswersByQuestion(questionId: number): Observable<Answer[]> {
  return this.http.get<Answer[]>(`${this.apiUrl}/questions/${questionId}/answers`);
  
}
getQuizzesByCourse(courseId: number): Observable<Quiz[]> {
  return this.http.get<Quiz[]>(`${this.apiUrl}/course/${courseId}`);
}
getQuizStatus(quizId: number, studentId: string): Observable<any> {
  return this.http.get(
    `${this.attemptUrl}/status?quizId=${quizId}&studentId=${studentId}`
  );
}
updateQuestion(questionId: number, question: Question): Observable<Question> {
  return this.http.put<Question>(`${this.apiUrl}/question/${questionId}`, question);
}

updateAnswer(answerId: number, answer: Answer): Observable<Answer> {
  return this.http.put<Answer>(`${this.apiUrl}/answers/${answerId}`, answer);
}

deleteAnswer(answerId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/answers/${answerId}`);
}

addQuestion(quizId: number, question: Question): Observable<Question> {
  return this.http.post<Question>(`${this.apiUrl}/quizAddQuestion/${quizId}`, question);
}


addAnswer(questionId: number, answer: Answer): Observable<Answer> {
  return this.http.post<Answer>(`${this.apiUrl}/${questionId}/answers`, answer);
}


deleteQuestion(questionId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/question/${questionId}`);
}

addQuiz(courseId: number, quiz: { title: string }): Observable<Quiz> {
  const quizToSend = { ...quiz, passingScore: 70, questions: [] };
  return this.http.post<Quiz>(`${this.apiUrl}/course/${courseId}`, quizToSend);
}

assignQuiz(payload: AssignQuizPayload): Observable<any> {
  return this.http.post(this.assignmentUrl, payload);
}

getAssignedQuizzesByStudent(studentId: string): Observable<AssignedQuiz[]> {
  return this.http.get<AssignedQuiz[]>(`${this.assignmentUrl}/student/${studentId}/quizzes`);
}
}
