SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ─────────────────────────────────────────────────────────────────────────────
-- ONE-TIME CLEANUP: remove old placeholder / Spring Boot seed data
-- (DELETE on non-existent rows is a no-op, so this is safe on every restart)
-- ─────────────────────────────────────────────────────────────────────────────
DELETE FROM reply   WHERE topic_id IN (
  SELECT id FROM topic WHERE title IN (
    'Welcome to the Forum','Welcome to the Forum!',
    'How to use Spring Boot','Tips for Spring Boot Microservices',
    'Course release Q2 2026','Q2 2026 Course Releases',
    'How to prepare for exams?'
  )
);
DELETE FROM topic WHERE title IN (
  'Welcome to the Forum','Welcome to the Forum!',
  'How to use Spring Boot','Tips for Spring Boot Microservices',
  'Course release Q2 2026','Q2 2026 Course Releases',
  'How to prepare for exams?'
);
DELETE FROM category WHERE name IN ('General Discussion','Announcements','Technical Help');

-- ─────────────────────────────────────────────────────────────────────────────
-- UNIQUE CONSTRAINTS (prevent duplicates on restart — MySQL 8.0+)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE UNIQUE INDEX IF NOT EXISTS idx_category_name ON category(name);
CREATE UNIQUE INDEX IF NOT EXISTS idx_topic_title   ON topic(title(500));

-- ─────────────────────────────────────────────────────────────────────────────
-- CATEGORIES
-- ─────────────────────────────────────────────────────────────────────────────
INSERT IGNORE INTO category (name, description, created_at) VALUES
('Grammar & Syntax',
 'Tenses, articles, sentence structure, punctuation and all things grammar.',
 CURDATE()),

('Vocabulary & Expression',
 'Expand your word bank: idioms, phrasal verbs, collocations and expressions.',
 CURDATE()),

('Speaking & Pronunciation',
 'Improve your accent, fluency, intonation and conversation confidence.',
 CURDATE()),

('Writing & Composition',
 'Academic essays, formal emails, reports, CVs and creative writing.',
 CURDATE()),

('Exam Preparation',
 'IELTS, TOEFL, Cambridge and other English certifications — tips and practice.',
 CURDATE()),

('Student Lounge',
 'Introductions, off-topic chat, recommendations and general student life.',
 CURDATE());

-- ─────────────────────────────────────────────────────────────────────────────
-- TOPICS  (explicit IDs starting at 100 so resource-service can reference them)
-- ─────────────────────────────────────────────────────────────────────────────

-- Grammar & Syntax
INSERT IGNORE INTO topic (id, title, content, author_email, created_at, category_id) VALUES
(100,
 'Present Perfect vs Simple Past — when to use each?',
 'I keep mixing up these two tenses. For example: "I have seen that film" vs "I saw that film yesterday." Is it about whether the time is specified? Any clear rule that always works?',
 'ahmed.benali@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Grammar & Syntax')),

(101,
 'The definite article "the" — why is it so complicated?',
 'As an Arabic speaker I struggle with "the" in English. We use it in Arabic for specific things too but the rules seem different. For example why do we say "the sun" but not "the breakfast"? Can anyone explain the logic?',
 'layla.hassan@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Grammar & Syntax')),

(102,
 'Conditional sentences: zero, first, second and third — a clear summary?',
 'I have a test on conditionals next week and I can never remember which tense goes in which part. Could someone post a clear table or explanation with an example for each type?',
 'sofia.martinez@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Grammar & Syntax'));

-- Vocabulary & Expression
INSERT IGNORE INTO topic (id, title, content, author_email, created_at, category_id) VALUES
(103,
 'Most useful phrasal verbs with "get" — a complete list?',
 'I''ve come across "get up", "get over", "get along", "get away with" and many more. Are there any others I should learn? And what is the best way to actually remember them all?',
 'james.okonkwo@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Vocabulary & Expression')),

(104,
 'Confusing homophones: your/you''re, there/their/they''re, affect/effect',
 'Even advanced students make these mistakes. I see them constantly in written work. Is there a reliable trick to remember the difference for each pair?',
 'priya.sharma@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Vocabulary & Expression')),

(105,
 'British English vs American English: key vocabulary differences',
 'I learned British English at school but a lot of online content uses American English. Things like "flat/apartment", "autumn/fall", "biscuit/cookie". Are there other important ones I should know for daily life?',
 'chen.wei@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Vocabulary & Expression'));

-- Speaking & Pronunciation
INSERT IGNORE INTO topic (id, title, content, author_email, created_at, category_id) VALUES
(106,
 'How to pronounce the -ed ending correctly?',
 'I know there are three pronunciations: /t/ /d/ and /ɪd/ but I always get confused about which verbs take which ending. For example "walked" vs "called" vs "wanted". Is there a simple rule?',
 'fatima.al-rashid@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Speaking & Pronunciation')),

(107,
 'Tips to sound more natural in English conversations?',
 'My grammar is quite good but when I speak with native speakers I sound stiff and unnatural. I think it is because I translate from my mother tongue. How can I start thinking in English and sound more fluent?',
 'ivan.petrov@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Speaking & Pronunciation'));

-- Writing & Composition
INSERT IGNORE INTO topic (id, title, content, author_email, created_at, category_id) VALUES
(108,
 'How to write a formal email in English — full guide?',
 'I need to email a university abroad to ask about admission. What is the proper structure? How should I open and close it? What phrases should I avoid? My teacher said "I am writing to inquire..." is a good start.',
 'amara.diallo@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Writing & Composition')),

(109,
 'IELTS Writing Task 2: how to structure an essay?',
 'I keep losing marks on Task 2. My ideas are good but my organisation is apparently weak. Should I always write 4 paragraphs? What should each paragraph contain? And how long should the introduction be?',
 'yui.tanaka@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Writing & Composition'));

-- Exam Preparation
INSERT IGNORE INTO topic (id, title, content, author_email, created_at, category_id) VALUES
(110,
 'IELTS vs TOEFL — which exam should I take?',
 'I need an English certificate for a Master''s programme in the UK. My university accepts both IELTS and TOEFL. Which is easier? Which is more widely recognised? And how long does it take to prepare?',
 'marcos.silva@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Exam Preparation')),

(111,
 'Cambridge B2 First — speaking test tips?',
 'I have my B2 First exam in 6 weeks. The speaking part is what scares me the most, especially Part 2 where you have to talk for 1 minute about a photo. Any tips on what the examiner looks for?',
 'anna.kowalski@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Exam Preparation'));

-- Student Lounge
INSERT IGNORE INTO topic (id, title, content, author_email, created_at, category_id) VALUES
(112,
 'Introduce yourself! Where are you from and why are you learning English?',
 'Hi everyone! I''ll start — my name is Rania, I''m from Tunisia and I''m learning English to get a job in international business. I love how this forum brings students from all over the world together. Your turn!',
 'rania.bouzid@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Student Lounge')),

(113,
 'Best English movies and TV shows to improve your level?',
 'My teacher recommended watching films without subtitles to improve listening. I''ve tried Friends and The Crown. The Crown is too difficult for me! What do you recommend for an intermediate level?',
 'leila.moraes@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Student Lounge')),

(114,
 'Best English podcasts for language learners?',
 'I commute 45 minutes each way and want to use that time to improve my English. I''ve heard of "BBC 6 Minute English" and "The English We Speak". Are there others? What level are they aimed at?',
 'kwame.asante@school.com', NOW(),
 (SELECT id FROM category WHERE name = 'Student Lounge'));

-- ─────────────────────────────────────────────────────────────────────────────
-- REPLIES
-- ─────────────────────────────────────────────────────────────────────────────
INSERT IGNORE INTO reply (id, content, created_at, topic_id) VALUES

-- Replies to topic 100 (Present Perfect vs Simple Past)
(1000,
 'The key rule is: use Present Perfect when the time is NOT specified or when the result matters now. Use Simple Past when you mention a specific finished time. So "I have eaten" (no time, result = I''m not hungry now) vs "I ate at 7pm" (specific time).',
 NOW(), 100),
(1001,
 'Another useful trick: if the sentence contains words like "yesterday", "last week", "in 2019", "ago" — always use Simple Past. If it contains "already", "just", "yet", "ever", "never", "recently" — use Present Perfect.',
 NOW(), 100),
(1002,
 'Note for British English speakers: British English uses Present Perfect more often. Americans would say "Did you eat already?" where British speakers say "Have you eaten already?" Both are correct but it explains why you see both online.',
 NOW(), 100),

-- Replies to topic 101 (The definite article)
(1003,
 'Here is the core rule: use "the" when both you and the listener know which specific thing you mean. "Pass me the salt" — we both know which salt (the one on the table). "I had breakfast" — breakfast is a meal in general, not a specific one.',
 NOW(), 101),
(1004,
 'We say "the sun", "the moon", "the sky" because there is only one. We say "breakfast", "lunch", "dinner" without "the" when we mean the meal in general. But you can say "the dinner I had last night was amazing" — because now it is specific!',
 NOW(), 101),

-- Replies to topic 102 (Conditionals)
(1005,
 'Here is a quick table: Zero conditional (always true facts): If + present, present. "If you heat water to 100°C, it boils." First conditional (real future possibility): If + present, will + base verb. "If it rains, I will stay home." Second conditional (unreal present/future): If + past, would + base verb. "If I were rich, I would travel." Third conditional (unreal past): If + past perfect, would have + past participle. "If I had studied, I would have passed."',
 NOW(), 102),
(1006,
 'A common mistake: never say "If I would..." — the "if" clause never uses "would". Instead: "If I HAD more time, I WOULD learn piano." Many students write "If I would have more time" which is incorrect.',
 NOW(), 102),

-- Replies to topic 103 (Phrasal verbs with get)
(1007,
 'Here are the most important ones: get up (wake up/rise), get over (recover from), get along (have a good relationship), get away with (do something wrong without punishment), get through (survive/finish), get rid of (remove/eliminate), get on with (continue/have good relationship), get back (return), get out (leave), get into (become interested in).',
 NOW(), 103),
(1008,
 'My tip: do not try to learn them all at once. Learn 3-4 per week in context — read a sentence or short dialogue using each one. Then use them in your own sentences the same day. Spaced repetition apps like Anki are great for this.',
 NOW(), 103),

-- Replies to topic 104 (Homophones)
(1009,
 'Easy tricks: YOUR = belonging to you (try substituting "my" — if "my" works, use "your"). YOU''RE = you are (if you can say "you are", use "you''re"). THERE = place (contains the word "here"). THEIR = belonging to them (contains "heir"). THEY''RE = they are (has apostrophe = contraction).',
 NOW(), 104),
(1010,
 'For affect/effect: AFFECT is usually a verb (to affect = to influence). EFFECT is usually a noun (an effect = a result). Memory trick: RAVEN — Remember Affect Verb Effect Noun.',
 NOW(), 104),

-- Replies to topic 106 (-ed pronunciation)
(1011,
 'The rule is based on the final sound of the verb (not the spelling). If the verb ends in a /t/ or /d/ sound → pronounce /ɪd/ (e.g. "wanted", "needed"). If it ends in a voiceless consonant (/p/, /k/, /f/, /s/, /ʃ/, /tʃ/) → pronounce /t/ (e.g. "walked", "kissed"). All other verbs (voiced sounds + vowels) → pronounce /d/ (e.g. "called", "loved").',
 NOW(), 106),

-- Replies to topic 107 (Sound more natural)
(1012,
 'The biggest change for me was learning chunks (fixed phrases) instead of individual words. Native speakers say "as a matter of fact", "to be honest", "what I mean is" — these come out automatically. Learn 2-3 new chunks every day and practise them until they are automatic.',
 NOW(), 107),
(1013,
 'Watch YouTube channels like "Rachel''s English" for American accent or "English with Lucy" for British. Shadowing technique: listen to a sentence, pause, repeat it out loud trying to match the rhythm and intonation exactly. Do this for 10 minutes a day.',
 NOW(), 107),

-- Replies to topic 108 (Formal email)
(1014,
 'Structure: 1) Subject line (clear and specific). 2) Opening: "Dear Professor Smith," or "Dear Sir/Madam,". 3) Introduction: "I am writing to inquire about...". 4) Main body: your request or information clearly stated. 5) Closing: "I look forward to hearing from you." 6) Sign-off: "Yours sincerely," (if you used their name) or "Yours faithfully," (if you used Sir/Madam). 7) Your full name.',
 NOW(), 108),

-- Replies to topic 109 (IELTS Task 2)
(1015,
 'The standard structure that works: Introduction (2-3 sentences: paraphrase the question + your thesis). Body paragraph 1 (your first main point + explanation + example). Body paragraph 2 (your second main point + explanation + example). Conclusion (1-2 sentences: restate your thesis + final thought). Aim for 250-280 words — going over 300 wastes time and rarely improves your score.',
 NOW(), 109),

-- Replies to topic 110 (IELTS vs TOEFL)
(1016,
 'For the UK, IELTS is far more commonly accepted and recognised. IELTS Academic is the one you need for university admissions. TOEFL is more computer-based and is stronger in the US/Canada. If your destination is a UK university, go with IELTS Academic. Preparation time varies — from 2 months (if you are already B2) to 6 months (if you are B1).',
 NOW(), 110),

-- Replies to topic 111 (Cambridge B2 Speaking)
(1017,
 'For Part 2 (the long turn): use the IDEA structure — Identify what you see, Describe the details, Explain what is happening, Add a personal comment. And ALWAYS speculate if you are unsure: "It looks as though...", "They might be...", "I would imagine that...". The examiner wants to hear you speaking, not silences.',
 NOW(), 111),

-- Replies to topic 112 (Introduce yourself)
(1018,
 'Hi Rania! I am Carlos from Colombia. I am studying English to get a B2 certificate for my CV. I have been here for 3 months and the platform is really helping me especially the writing feedback from teachers. Looking forward to learning with everyone!',
 NOW(), 112),
(1019,
 'Hello everyone! I am Mei from China. I passed HSK 6 in Chinese so now I want to reach C1 in English. My biggest weakness is speaking — I understand almost everything but freeze when I need to talk. Hope to improve here!',
 NOW(), 112),

-- Replies to topic 113 (Movies & TV)
(1020,
 'For intermediate level I recommend: "Modern Family" (clear American English, everyday topics, humour), "The Great British Bake Off" (slow clear British English, easy vocabulary), "Sherlock" (challenging but very satisfying). Start with English subtitles, then try without.',
 NOW(), 113),
(1021,
 '"Brooklyn Nine-Nine" is perfect for intermediate students — fast but clear, lots of repetition of everyday phrases, and very entertaining. I watched all 8 seasons and my vocabulary improved enormously.',
 NOW(), 113),

-- Replies to topic 114 (Podcasts)
(1022,
 'My top 3: 1) "BBC 6 Minute English" — perfect for B1/B2, short episodes, transcript available. 2) "The English We Speak" by BBC — learns specific words/phrases per episode. 3) "All Ears English" — focuses on real American conversations. For advanced: "The Daily" by NYT or "In Our Time" by BBC Radio 4.',
 NOW(), 114);

-- ─────────────────────────────────────────────────────────────────────────────
-- BLOCKED WORDS
-- ─────────────────────────────────────────────────────────────────────────────
INSERT IGNORE INTO badwords (word) VALUES
('spam'), ('idiot'), ('stupid'), ('offensive'), ('inappropriate');

SET FOREIGN_KEY_CHECKS = 1;
