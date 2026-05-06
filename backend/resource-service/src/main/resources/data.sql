SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ─────────────────────────────────────────────────────────────────────────────
-- UNIQUE CONSTRAINT — prevents duplicate rows on every restart
-- ─────────────────────────────────────────────────────────────────────────────
CREATE UNIQUE INDEX IF NOT EXISTS idx_resource_title ON resources(title(500));

-- ─────────────────────────────────────────────────────────────────────────────
-- CLEANUP: remove any previously seeded resources whose URLs went dead
-- ─────────────────────────────────────────────────────────────────────────────
DELETE FROM resources WHERE title IN (
  'Conditional Sentences Practice Worksheet (PDF)',
  'Phrasal Verb GET — Complete List with Examples (PDF)',
  'B2 First Speaking Useful Phrases (PDF)'
);

-- ─────────────────────────────────────────────────────────────────────────────
-- RESOURCES  (status = APPROVED so they appear immediately in the library)
-- topic_id references forum-service topic IDs 100-114
-- ─────────────────────────────────────────────────────────────────────────────

-- ── Topic 100: Present Perfect vs Simple Past ────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'BBC Learning English: Present Perfect',
  'A concise BBC explanation of when to use Present Perfect vs Simple Past, with audio examples and interactive exercises.',
  'https://www.bbc.co.uk/learningenglish/english/course/upper-intermediate/unit-1/session-1',
  'LINK', 100, 1, 'APPROVED', NOW(),
  'BBC grammar unit covering present perfect usage with clear rules and audio drills — great for self-study.'
),
(
  'EnglishPage: Present Perfect vs Past Simple (full guide)',
  'Detailed written guide with 12 rules, timelines, adverbs of frequency and a 30-question online quiz at the end.',
  'https://www.englishpage.com/verbpage/presentperfect.html',
  'LINK', 100, 1, 'APPROVED', NOW(),
  'Comprehensive reference page with rule tables, adverb lists and an embedded quiz — bookmark-worthy.'
),
(
  'BBC Grammar Guide PDF – Perfect Tenses',
  'Printable two-page PDF summarising Present Perfect Simple and Continuous with example sentences and common mistakes.',
  'https://www.bbc.co.uk/worldservice/learningenglish/grammar/learnit/learnitv186.shtml',
  'LINK', 100, 1, 'APPROVED', NOW(),
  'Printable quick-reference sheet — useful to keep on your desk while writing.'
);

-- ── Topic 101: The definite article "the" ────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'British Council: Articles a/an/the – exercises',
  'Interactive exercises from British Council covering definite and indefinite articles with instant feedback.',
  'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/articles',
  'LINK', 101, 1, 'APPROVED', NOW(),
  'B1–B2 level exercises with immediate feedback — ideal for identifying your specific article gaps.'
),
(
  'Cambridge Grammar: The Definite Article Explained',
  'Cambridge University Press page with a clear explanation of when to use "the", including exceptions for proper nouns and meals.',
  'https://dictionary.cambridge.org/grammar/british-grammar/determiners-and-quantifiers/articles-a-an-and-the',
  'LINK', 101, 1, 'APPROVED', NOW(),
  'Authoritative Cambridge reference — especially helpful for the tricky "the sun / breakfast" type exceptions.'
);

-- ── Topic 102: Conditional sentences ─────────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'British Council: Conditionals 0 to 3 – interactive practice',
  'Four separate exercises (one per conditional type) with explanations and scores. Covers zero through third conditionals.',
  'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/conditionals',
  'LINK', 102, 1, 'APPROVED', NOW(),
  'Structured practice split by conditional type — great exam revision tool.'
),
(
  'Grammarly Blog: A Clear Guide to All Four Conditionals',
  'Well-written article explaining the four conditional types with examples and the most common learner mistakes.',
  'https://www.grammarly.com/blog/conditional-sentences/',
  'LINK', 102, 1, 'APPROVED', NOW(),
  'Plain-English explanations with real-world example sentences and a handy summary table at the end.'
),
(
  'Conditional Sentences Practice Worksheet (PDF)',
  'Printable A4 worksheet with gap-fill and sentence-transformation exercises covering all four conditional types.',
  'https://www.perfect-english-grammar.com/support-files/conditional_sentences_exercises.pdf',
  'PDF', 102, 1, 'APPROVED', NOW(),
  'Offline-friendly worksheet — 20 exercises perfect for exam preparation or classroom use.'
);

-- ── Topic 103: Phrasal verbs with "get" ──────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'BBC: The English We Speak — Phrasal Verbs with GET',
  'Short BBC radio-style audio clip explaining the most common "get" phrasal verbs with natural dialogue examples.',
  'https://www.bbc.co.uk/learningenglish/english/features/the-english-we-speak',
  'LINK', 103, 1, 'APPROVED', NOW(),
  'Audio-focused — great for learners who want to hear phrasal verbs used in natural British speech.'
),
(
  'Phrasal Verb GET — Complete List with Examples (PDF)',
  'Two-page PDF listing 25 phrasal verbs with "get", their meanings, and an example sentence for each. Print and stick on your wall.',
  'https://www.perfect-english-grammar.com/support-files/phrasal_verbs_get.pdf',
  'PDF', 103, 1, 'APPROVED', NOW(),
  'Dense but scannable cheat-sheet — 25 "get" phrasal verbs with example sentences, ready to print.'
);

-- ── Topic 104: Confusing homophones ──────────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'Grammarly: Your vs You're — Once and for All',
  'Clear article with memorable tricks for your/you''re, their/there/they''re, affect/effect and more. Includes a mini quiz.',
  'https://www.grammarly.com/blog/youre-vs-your/',
  'LINK', 104, 1, 'APPROVED', NOW(),
  'Short, shareable article — the substitution tricks are genuinely memorable and tested in an embedded quiz.'
),
(
  'Homophones Worksheet — Their / There / They''re (PDF)',
  'Printable worksheet with 20 gap-fill sentences targeting the most commonly confused homophones in English.',
  'https://www.k12reader.com/worksheet/there-their-theyre/',
  'LINK', 104, 1, 'APPROVED', NOW(),
  'Simple, focused worksheet — 20 sentences, no distractions, ideal for quick targeted practice.'
);

-- ── Topic 105: British English vs American English ───────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'Oxford Dictionaries: British vs American English',
  'Official Oxford page listing the most important vocabulary, spelling and grammar differences between the two varieties.',
  'https://www.oxfordlearnersdictionaries.com/wordlists/american-english-british-english',
  'LINK', 105, 1, 'APPROVED', NOW(),
  'Authoritative Oxford word list — covers vocabulary, spelling differences (colour/color) and grammar variations.'
),
(
  'BBC Learning English: Saying it Right — British vs American',
  'Audio and video series comparing pronunciation and vocabulary between British and American English with native speaker examples.',
  'https://www.bbc.co.uk/learningenglish/english/features/pronunciation',
  'LINK', 105, 1, 'APPROVED', NOW(),
  'Audio-driven comparison — hear the differences rather than just read about them.'
);

-- ── Topic 106: Pronouncing the -ed ending ────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'Rachel''s English: -ED Ending Pronunciation (YouTube)',
  'YouTube video by Rachel''s English demonstrating the three -ed ending sounds (/t/ /d/ /ɪd/) with clear minimal-pair examples.',
  'https://www.youtube.com/watch?v=aBqbKGrp4lk',
  'VIDEO', 106, 1, 'APPROVED', NOW(),
  'Visual and audio — Rachel slows down each sound with mouth diagrams, making the rule click immediately.'
),
(
  '-ED Pronunciation Rule Chart (PDF)',
  'One-page printable chart grouping common verbs by their -ed ending pronunciation (/t/, /d/, /ɪd/) with a decision flowchart.',
  'https://www.englishclub.com/pronunciation/ed.htm',
  'LINK', 106, 1, 'APPROVED', NOW(),
  'Quick-reference flowchart — decide /t/, /d/ or /ɪd/ in seconds once you''ve internalised the final-sound rule.'
);

-- ── Topic 107: Sound more natural in English ─────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'English with Lucy: How to Sound Like a Native Speaker (YouTube)',
  'Popular YouTube video explaining connected speech, contractions, linking sounds, and reduction — with exercises at the end.',
  'https://www.youtube.com/watch?v=E0pMqeRB-FM',
  'VIDEO', 107, 1, 'APPROVED', NOW(),
  'High-quality production — Lucy covers weak forms, linking and assimilation with real-speed speech samples.'
),
(
  'Shadowing Technique Guide — Fluency Fast-Track',
  'Written guide explaining the shadowing method step by step: choosing material, listening, pausing, mirroring, then full speed.',
  'https://www.fluentu.com/blog/english/shadowing-language-learning/',
  'LINK', 107, 1, 'APPROVED', NOW(),
  'Clear how-to article on shadowing — the most scientifically supported technique for speaking fluency.'
),
(
  'BBC 6 Minute English: Conversation Chunks',
  'BBC audio episode discussing common conversational chunks and discourse markers used by native English speakers.',
  'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english',
  'LINK', 107, 1, 'APPROVED', NOW(),
  'BBC radio episode with full transcript — listen, read along, and pick up natural discourse markers.'
);

-- ── Topic 108: How to write a formal email ───────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'British Council: Formal Email Writing Guide',
  'Step-by-step guide from British Council on writing professional emails: structure, opening phrases, closing phrases and examples.',
  'https://learnenglish.britishcouncil.org/skills/writing/b2-writing/formal-email',
  'LINK', 108, 1, 'APPROVED', NOW(),
  'B2-level British Council resource — includes a model email, annotated with function labels for each section.'
),
(
  'Formal Email Phrases PDF — Opening to Sign-off',
  'Printable reference card with ready-to-use phrases for every part of a formal email: purpose, request, apology, follow-up.',
  'https://www.english-at-home.com/writing/how-to-write-a-formal-email/',
  'LINK', 108, 1, 'APPROVED', NOW(),
  'Phrase bank covering 8 email functions — copy-paste starting points that you then personalise.'
),
(
  'Oxford Online English: How to Write a Formal Email (YouTube)',
  'Clear YouTube tutorial walking through a formal email to a university admissions office — the exact scenario many learners face.',
  'https://www.youtube.com/watch?v=oeJ4Se7WDTM',
  'VIDEO', 108, 1, 'APPROVED', NOW(),
  'Uses a university-application email as the worked example — directly relevant to students applying abroad.'
);

-- ── Topic 109: IELTS Writing Task 2 ──────────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'IELTS.org: Writing Task 2 Sample Questions',
  'Official IELTS website page with authentic Task 2 sample questions sorted by essay type (opinion, discussion, problem-solution).',
  'https://www.ielts.org/about-ielts/ielts-for-organisations/general-training-and-academic-comparison/academic',
  'LINK', 109, 1, 'APPROVED', NOW(),
  'Official source — use these prompts for timed practice to simulate real exam conditions.'
),
(
  'IELTS Liz: Task 2 Essay Structure (PDF)',
  'Free PDF by IELTS Liz (score 8.5+ coach) explaining her four-paragraph band-9 essay structure with a worked example.',
  'https://ieltsliz.com/ielts-writing-task-2/',
  'LINK', 109, 1, 'APPROVED', NOW(),
  'Opinionated but effective — the Liz four-paragraph template is used by thousands of successful candidates.'
),
(
  'E2 IELTS: How to Write a Band 9 Task 2 Essay (YouTube)',
  'YouTube breakdown of a band-9 essay paragraph by paragraph, showing exactly what the examiner is looking for.',
  'https://www.youtube.com/watch?v=RkG8l4d-Guk',
  'VIDEO', 109, 1, 'APPROVED', NOW(),
  'Examiner-focused analysis — understand the scoring criteria by watching a band-9 answer dissected live.'
);

-- ── Topic 110: IELTS vs TOEFL ────────────────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'Magoosh: IELTS vs TOEFL — Which Is Right for You?',
  'Detailed comparison article covering format, scoring, acceptance by university, cost and preparation time for both exams.',
  'https://magoosh.com/ielts/ielts-vs-toefl/',
  'LINK', 110, 1, 'APPROVED', NOW(),
  'Side-by-side comparison table — makes the IELTS vs TOEFL decision clear in under 5 minutes.'
),
(
  'British Council: IELTS Registration and Test Dates',
  'Official British Council page for finding IELTS test centres and registration deadlines near you.',
  'https://www.britishcouncil.org/exam/ielts',
  'LINK', 110, 1, 'APPROVED', NOW(),
  'Official registration portal — check test dates, centres and fees before committing to a preparation timeline.'
);

-- ── Topic 111: Cambridge B2 First speaking test ──────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'Cambridge: B2 First Speaking Sample Test (Official)',
  'Official Cambridge video of a complete B2 First speaking test (all 4 parts) with real candidates and examiner commentary.',
  'https://www.cambridgeenglish.org/exams-and-tests/first/preparation/',
  'LINK', 111, 1, 'APPROVED', NOW(),
  'Straight from Cambridge — watch and mimic real candidate behaviour, timing, and language level.'
),
(
  'How to Describe a Photo in B2 First (Part 2) — YouTube',
  'YouTube tutorial on structuring the 1-minute Part 2 long turn: describe, speculate, compare, and conclude under time pressure.',
  'https://www.youtube.com/watch?v=NVU-VNQR-5Y',
  'VIDEO', 111, 1, 'APPROVED', NOW(),
  'Focuses entirely on Part 2 — the part candidates fear most. Clear timing advice and speculative language bank.'
),
(
  'B2 First Speaking Useful Phrases (PDF)',
  'Printable phrase list covering all 4 parts of the B2 First speaking exam: agreeing, speculating, comparing, giving opinions.',
  'https://www.cambridgeenglish.org/images/168617-b2-first-speaking-sample-paper.pdf',
  'PDF', 111, 1, 'APPROVED', NOW(),
  'Phrase bank for all four parts — study this the night before your speaking exam for last-minute confidence.'
);

-- ── Topic 112: Student Lounge ─────────────────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'CEFR Self-Assessment Grid — What Level Am I?',
  'Official Council of Europe self-assessment grid (A1 to C2) with "can do" statements to help you identify your current level.',
  'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale',
  'LINK', 112, 1, 'APPROVED', NOW(),
  'Official CEFR grid — a 5-minute self-check that tells you exactly where you sit and what to work on next.'
);

-- ── Topic 113: Best English movies and TV shows ──────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'FluentU: 27 Best TV Shows for Learning English (by Level)',
  'Curated list of TV series sorted by CEFR level (A2 to C1) with brief descriptions and which English variety they use.',
  'https://www.fluentu.com/blog/english/english-tv-shows/',
  'LINK', 113, 1, 'APPROVED', NOW(),
  'Sorted by CEFR level — skip straight to your tier (B1/B2) and pick a show that matches your current ability.'
),
(
  'How to Use Movies to Improve Your English (YouTube)',
  'Practical video guide showing the "pause and repeat" method, shadowing with films, and how to use subtitles strategically.',
  'https://www.youtube.com/watch?v=lz9Sn8WbHDY',
  'VIDEO', 113, 1, 'APPROVED', NOW(),
  'Technique-focused — not just a list of shows but a system for extracting maximum learning from any film.'
);

-- ── Topic 114: Best English podcasts ─────────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'BBC 6 Minute English — Free Podcast Archive',
  'Full archive of BBC 6 Minute English episodes with transcripts. Topics range from science to culture. New episode every week.',
  'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english',
  'LINK', 114, 1, 'APPROVED', NOW(),
  'Best free podcast for B1–B2 learners — each episode has a full PDF transcript so you can read along.'
),
(
  'All Ears English: 5 Reasons to Listen Every Day (YouTube)',
  'Short video explaining the All Ears English podcast methodology and which episodes to start with for intermediate learners.',
  'https://www.youtube.com/watch?v=H6b5N2h6f1o',
  'VIDEO', 114, 1, 'APPROVED', NOW(),
  'A good introduction to the AEE approach — connection not perfection, natural American English in every episode.'
),
(
  'Podbean: The English We Speak — BBC',
  'Direct link to "The English We Speak" BBC podcast feed — 3-minute episodes each teaching one idiom or expression in context.',
  'https://www.bbc.co.uk/programmes/p02pc9gg/episodes/downloads',
  'LINK', 114, 1, 'APPROVED', NOW(),
  'Bite-sized 3-minute episodes — one idiom per episode with native speaker dialogue. Perfect for your commute.'
);

SET FOREIGN_KEY_CHECKS = 1;
