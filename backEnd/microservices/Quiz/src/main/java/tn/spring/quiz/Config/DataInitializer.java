package tn.spring.quiz.Config;

import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import tn.spring.quiz.Models.*;
import tn.spring.quiz.Repositories.*;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final String WELCOME_QUIZZES_TITLE = "Welcome Quizzes";

    private final CourseRepository courseRepository;
    private final QuizRepository quizRepository;

    public DataInitializer(CourseRepository courseRepository,
                           QuizRepository quizRepository) {
        this.courseRepository = courseRepository;
        this.quizRepository = quizRepository;
    }

    @Override
    public void run(String... args) {

        // 🇬🇧 Faker en anglais
        Faker faker = new Faker(new java.util.Locale("en-US"));

        long initialCourseCount = courseRepository.count();
        ensureWelcomeQuizzesCourseExists();

        if (initialCourseCount > 0) {
            System.out.println("Courses already exist, skipping initialization.");
            return;
        }

        // =========================
        // 1️⃣ CREATE COURSES
        // =========================
        List<Course> courses = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            Course course = new Course();
            course.setTitle(faker.educator().course() + " for e-learning");
            course.setDescription(faker.lorem().sentence(12));
            course.setDuration(faker.number().numberBetween(5, 30)); // hours
            course.setCreator(faker.number().randomNumber());

            course.setContents(new ArrayList<>());
            course.setQuizzes(new ArrayList<>());

            courses.add(course);
        }

        courseRepository.saveAll(courses);
        System.out.println("10 Courses added ");

        // =========================
        // 2️⃣ GENERATE CONTENT, QUIZZES, QUESTIONS & ANSWERS
        // =========================
        for (Course course : courses) {

            // ---------- CONTENT ----------
            int contentCount = faker.number().numberBetween(3, 6);
            List<Content> contents = new ArrayList<>();

            for (int j = 0; j < contentCount; j++) {
                Content content = new Content();
                content.setTitle(faker.educator().campus() + " Lesson " + (j + 1));
                content.setType("VIDEO");
                content.setUrl("https://video.example.com/" + faker.internet().uuid());
                content.setCourse(course);
                contents.add(content);
            }
            course.setContents(contents);

            // ---------- QUIZZES ----------
            int quizCount = faker.number().numberBetween(1, 3);
            List<Quiz> quizzes = new ArrayList<>();

            for (int q = 0; q < quizCount; q++) {
                Quiz quiz = new Quiz();
                quiz.setTitle("Quiz: " + faker.educator().course() + " Basics");
                quiz.setCourse(course);
                quiz.setQuestions(new ArrayList<>());

                // ---------- QUESTIONS ----------
                int questionCount = faker.number().numberBetween(3, 5);

                for (int qc = 0; qc < questionCount; qc++) {
                    Question question = new Question();
                    question.setText(faker.lorem().sentence(8, 12));
                    question.setQuiz(quiz);
                    question.setAnswers(new ArrayList<>());

                    // ---------- ANSWERS ----------
                    String[] options = {"Option A", "Option B", "Option C", "Option D"};
                    int correctIndex = faker.number().numberBetween(0, options.length);

                    for (int i = 0; i < options.length; i++) {
                        Answer answer = new Answer();
                        answer.setText(options[i]);
                        answer.setCorrect(i == correctIndex);
                        answer.setQuestion(question);
                        question.getAnswers().add(answer);
                    }

                    quiz.getQuestions().add(question);
                }

                quizzes.add(quiz);
            }

            course.setQuizzes(quizzes);

            // ✅ Sauvegarde cascade
            courseRepository.save(course);
        }

        System.out.println("Fake contents, quizzes, questions and answers generated in English for e-learning platform");
    }

    private void ensureWelcomeQuizzesCourseExists() {
        boolean exists = courseRepository.findAll().stream()
                .anyMatch(course ->
                        course.getTitle() != null
                                && course.getTitle().trim().equalsIgnoreCase(WELCOME_QUIZZES_TITLE));

        if (exists) {
            return;
        }

        Course welcomeCourse = new Course();
        welcomeCourse.setTitle(WELCOME_QUIZZES_TITLE);
        welcomeCourse.setDescription("Starter quizzes assigned by tutors to newly registered students.");
        welcomeCourse.setDuration(1);
        welcomeCourse.setCreator(0L);
        welcomeCourse.setContents(new ArrayList<>());
        welcomeCourse.setQuizzes(new ArrayList<>());

        courseRepository.save(welcomeCourse);
        System.out.println("\"Welcome Quizzes\" course created.");
    }
}
