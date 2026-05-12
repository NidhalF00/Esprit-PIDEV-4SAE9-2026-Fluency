import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('assistantWidget') assistantWidgetRef?: ElementRef<HTMLElement>;

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
  assistantDragging = false;
  assistantPosition = { x: 24, y: 24 };
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

  private readonly assistantPositionStorageKey = 'fluencyAssistantPosition';
  private readonly assistantDragThreshold = 5;
  private assistantDragStart = { pointerX: 0, pointerY: 0, x: 24, y: 24 };
  private assistantMovedDuringDrag = false;
  private assistantSuppressClick = false;

  constructor(
    private authService: AuthService,
    private quizService: QuizService,
    private assistantService: AssistantService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.loadAssistantPosition();
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
    if (this.assistantSuppressClick) {
      return;
    }

    this.assistantOpen = !this.assistantOpen;
    this.clearAssistantError();

    setTimeout(() => {
      this.assistantPosition = this.clampAssistantPosition(this.assistantPosition);
      this.saveAssistantPosition();
    });
  }

  startAssistantDrag(event: PointerEvent): void {
    if ((event.pointerType === 'mouse' && event.button !== 0) || (event.target as HTMLElement).closest('[data-assistant-no-drag]')) {
      return;
    }

    event.preventDefault();
    this.assistantDragging = true;
    this.assistantMovedDuringDrag = false;
    this.assistantDragStart = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      x: this.assistantPosition.x,
      y: this.assistantPosition.y
    };

    (event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId);
  }

  @HostListener('document:pointermove', ['$event'])
  moveAssistantDrag(event: PointerEvent): void {
    if (!this.assistantDragging) {
      return;
    }

    const deltaX = event.clientX - this.assistantDragStart.pointerX;
    const deltaY = event.clientY - this.assistantDragStart.pointerY;

    if (Math.abs(deltaX) > this.assistantDragThreshold || Math.abs(deltaY) > this.assistantDragThreshold) {
      this.assistantMovedDuringDrag = true;
    }

    this.assistantPosition = this.clampAssistantPosition({
      x: this.assistantDragStart.x + deltaX,
      y: this.assistantDragStart.y + deltaY
    });
  }

  @HostListener('document:pointerup')
  @HostListener('document:pointercancel')
  endAssistantDrag(): void {
    if (!this.assistantDragging) {
      return;
    }

    this.assistantDragging = false;
    this.saveAssistantPosition();

    if (this.assistantMovedDuringDrag) {
      this.assistantSuppressClick = true;
      setTimeout(() => {
        this.assistantSuppressClick = false;
      }, 120);
    }
  }

  getAssistantPositionStyle(): { [key: string]: string } {
    return {
      left: `${this.assistantPosition.x}px`,
      top: `${this.assistantPosition.y}px`
    };
  }

  @HostListener('window:resize')
  keepAssistantInViewport(): void {
    this.assistantPosition = this.clampAssistantPosition(this.assistantPosition);
    this.saveAssistantPosition();
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

  private loadAssistantPosition(): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const stored = localStorage.getItem(this.assistantPositionStorageKey);
      if (!stored) {
        this.assistantPosition = this.getDefaultAssistantPosition();
        return;
      }

      const position = JSON.parse(stored) as { x?: number; y?: number; anchor?: string };
      if (Number.isFinite(position.x) && Number.isFinite(position.y)) {
        const parsedPosition = {
          x: Number(position.x),
          y: Number(position.y)
        };
        this.assistantPosition = this.clampAssistantPosition(
          position.anchor === 'left-top' ? parsedPosition : this.convertRightBottomPosition(parsedPosition)
        );
      }
    } catch {
      this.assistantPosition = this.getDefaultAssistantPosition();
    }
  }

  private saveAssistantPosition(): void {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.setItem(this.assistantPositionStorageKey, JSON.stringify({
      ...this.assistantPosition,
      anchor: 'left-top'
    }));
  }

  private clampAssistantPosition(position: { x: number; y: number }): { x: number; y: number } {
    if (typeof window === 'undefined') {
      return position;
    }

    const margin = 12;
    const { width: widgetWidth, height: widgetHeight } = this.getAssistantWidgetSize();
    const maxX = Math.max(margin, window.innerWidth - widgetWidth - margin);
    const maxY = Math.max(margin, window.innerHeight - widgetHeight - margin);

    return {
      x: Math.min(Math.max(position.x, margin), maxX),
      y: Math.min(Math.max(position.y, margin), maxY)
    };
  }

  private getDefaultAssistantPosition(): { x: number; y: number } {
    if (typeof window === 'undefined') {
      return { x: 24, y: 24 };
    }

    const margin = 24;
    const { width: widgetWidth, height: widgetHeight } = this.getAssistantWidgetSize();

    return this.clampAssistantPosition({
      x: window.innerWidth - widgetWidth - margin,
      y: window.innerHeight - widgetHeight - margin
    });
  }

  private convertRightBottomPosition(position: { x: number; y: number }): { x: number; y: number } {
    if (typeof window === 'undefined') {
      return position;
    }

    const { width: widgetWidth, height: widgetHeight } = this.getAssistantWidgetSize();

    return {
      x: window.innerWidth - widgetWidth - position.x,
      y: window.innerHeight - widgetHeight - position.y
    };
  }

  private getAssistantWidgetSize(): { width: number; height: number } {
    const widget = this.assistantWidgetRef?.nativeElement;

    return {
      width: widget?.offsetWidth || 88,
      height: widget?.offsetHeight || 88
    };
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
