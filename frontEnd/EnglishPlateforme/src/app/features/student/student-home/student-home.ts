import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AssistantChatResponse, AssistantService } from '../../../services/assistant.service';
import { AssignedQuiz, QuizService } from '../../../services/quiz.service';

interface AssistantMessage {
  role: 'user' | 'assistant';
  text: string;
  category?: string;
  suggestions?: string[];
  aiUsed?: boolean;
}

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.html'
})
export class StudentHomeComponent implements OnInit {
  currentUser: any;
  assignedQuizzes: AssignedQuiz[] = [];
  assignedLoading = false;
  assignedError = '';
  pronunciationText = '';
  pronunciationMessage = '';
  pronunciationSamples = [
    'Hello, how are you?',
    'I would like to improve my English.',
    'Water'
  ];
  assistantOpen = false;
  assistantInput = '';
  assistantLoading = false;
  assistantError = '';
  assistantMessages: AssistantMessage[] = [];
  assistantSuggestions = [
    'How do I take a placement quiz?',
    'What is A1, A2, and B1?',
    'How can I practice pronunciation?',
    'How do I get a certificate?',
    'When should I ask a tutor?'
  ];

  features = [
    { title: 'My Progress', desc: 'Check your scores and levels.', icon: '📈' },
    { title: 'Quizzes', desc: 'Pending assessments for you.', icon: '📝' },
    { title: 'Live Class', desc: 'Join your tutor online.', icon: '🎥' },
    { title: 'Certificates', desc: 'Download your diplomas.', icon: '🏆' }
  ];

  constructor(
    private authService: AuthService,
    private quizService: QuizService,
    private assistantService: AssistantService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.loadAssignedQuizzes();
  }

  speakPronunciation(): void {
    const text = this.pronunciationText.trim();
    if (!text) {
      this.pronunciationMessage = 'Type a word or sentence first.';
      return;
    }

    const speech = this.getSpeechSynthesis();
    if (!speech || typeof SpeechSynthesisUtterance === 'undefined') {
      this.pronunciationMessage = 'Speech synthesis is not supported in this browser.';
      return;
    }

    speech.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.onerror = () => {
      this.pronunciationMessage = 'Unable to play pronunciation.';
    };

    speech.speak(utterance);
    this.pronunciationMessage = 'Playing pronunciation...';
  }

  stopPronunciation(): void {
    const speech = this.getSpeechSynthesis();
    if (speech) {
      speech.cancel();
      this.pronunciationMessage = 'Pronunciation stopped.';
    }
  }

  usePronunciationSample(sample: string): void {
    this.pronunciationText = sample;
    this.pronunciationMessage = '';
  }

  toggleAssistant(): void {
    this.assistantOpen = !this.assistantOpen;
    this.clearAssistantError();
  }

  sendAssistantMessage(): void {
    const message = this.assistantInput.trim();

    if (!message) {
      this.assistantError = 'Type a question first.';
      return;
    }

    this.assistantMessages.push({
      role: 'user',
      text: message
    });
    this.assistantInput = '';
    this.assistantLoading = true;
    this.clearAssistantError();

    this.assistantService.chat(message).subscribe({
      next: (response) => {
        this.addAssistantResponse(response);
        this.assistantLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.assistantError = this.getAssistantErrorMessage(error);
        this.assistantLoading = false;
      }
    });
  }

  sendAssistantSuggestion(text: string): void {
    this.assistantInput = text;
    this.sendAssistantMessage();
  }

  clearAssistantError(): void {
    this.assistantError = '';
  }

  private loadAssignedQuizzes(): void {
    const userFromAuth = this.authService.getUser();
    const studentId = userFromAuth?.id || localStorage.getItem('USER_ID');

    if (!studentId) {
      this.assignedError = 'Student identity is missing. Please log in again.';
      return;
    }

    this.assignedLoading = true;
    this.assignedError = '';

    this.quizService.getAssignedQuizzesByStudent(studentId).subscribe({
      next: (data) => {
        this.assignedQuizzes = data || [];
        this.assignedLoading = false;
      },
      error: () => {
        this.assignedError = 'Unable to load assigned quizzes.';
        this.assignedLoading = false;
      }
    });
  }

  private getSpeechSynthesis(): SpeechSynthesis | null {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return null;
    }

    return window.speechSynthesis;
  }

  private addAssistantResponse(response: AssistantChatResponse): void {
    this.assistantMessages.push({
      role: 'assistant',
      text: response.reply || 'I can help with placement quizzes, pronunciation, courses, certificates, and tutor support.',
      category: response.category,
      suggestions: response.suggestions,
      aiUsed: response.aiUsed
    });

    if (response.suggestions && response.suggestions.length > 0) {
      this.assistantSuggestions = response.suggestions;
    }
  }

  private getAssistantErrorMessage(error: HttpErrorResponse): string {
    if (error.status === 401 || error.status === 403) {
      return 'Please log in again to use Fluency Assistant.';
    }

    return 'Fluency Assistant is currently unavailable. Please try again later.';
  }
}
