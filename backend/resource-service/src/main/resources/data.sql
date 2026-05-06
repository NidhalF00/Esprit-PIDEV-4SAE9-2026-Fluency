SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ─────────────────────────────────────────────────────────────────────────────
-- UNIQUE CONSTRAINT — prevents duplicate rows on every restart
-- ─────────────────────────────────────────────────────────────────────────────
CREATE UNIQUE INDEX IF NOT EXISTS idx_resource_title ON resources(title(500));

-- ─────────────────────────────────────────────────────────────────────────────
-- CLEANUP: remove resources whose URLs were dead or have been replaced
-- ─────────────────────────────────────────────────────────────────────────────
DELETE FROM resources WHERE title IN (
  'Conditional Sentences Practice Worksheet (PDF)',
  'Phrasal Verb GET — Complete List with Examples (PDF)',
  'B2 First Speaking Useful Phrases (PDF)',
  'All Ears English: 5 Reasons to Listen Every Day (YouTube)',
  'BBC Grammar Guide PDF – Perfect Tenses'
);

-- ─────────────────────────────────────────────────────────────────────────────
-- RESOURCES  (status = APPROVED so they appear immediately in the library)
-- topic_id references forum-service topic IDs 100-114
-- ─────────────────────────────────────────────────────────────────────────────

-- ── Topic 100: Present Perfect vs Simple Past ────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'BBC Learning English: Present Perfect vs Past Simple',
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
  'BBC Learning English: Present Perfect vs Past Simple (YouTube)',
  'BBC Learning English video explaining the key difference between present perfect and past simple with clear example sentences.',
  'https://www.youtube.com/watch?v=4J-8PJB19o4',
  'VIDEO', 100, 1, 'APPROVED', NOW(),
  'Short BBC explainer — the two-minute examples make the rule stick much faster than reading a grammar book.'
),
(
  'English with Lucy: Present Perfect vs Past Simple (YouTube)',
  'In-depth video lesson by English with Lucy covering all the time expressions that trigger each tense, with practice sentences.',
  'https://www.youtube.com/watch?v=3wVoEtUsaJc',
  'VIDEO', 100, 1, 'APPROVED', NOW(),
  'Lucy''s clear delivery and on-screen text make this ideal for visual learners who need the rule to click once and for all.'
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
),
(
  'EngVid: Articles A, AN, THE — Full Lesson (YouTube)',
  'Ronnie from EngVid explains definite and indefinite articles in plain English with lots of examples — perfect for Arabic and Asian learners.',
  'https://www.youtube.com/watch?v=FHQ7v-Bxt3k',
  'VIDEO', 101, 1, 'APPROVED', NOW(),
  'Ronnie''s high-energy teaching style makes this tricky topic surprisingly fun — highly rated by learners worldwide.'
),
(
  'BBC Learning English: How to Use THE (YouTube)',
  'BBC Grammar Guide video breaking down the definite article rule into three simple questions you ask yourself before using "the".',
  'https://www.youtube.com/watch?v=SoZb0sEaUy4',
  'VIDEO', 101, 1, 'APPROVED', NOW(),
  'The three-question method is the clearest decision framework for articles — works for every case including edge cases.'
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
  'English with Lucy: All Conditionals Explained (YouTube)',
  'Comprehensive YouTube lesson covering zero, first, second, third and mixed conditionals with on-screen tables and example sentences.',
  'https://www.youtube.com/watch?v=1KOHXkDXmik',
  'VIDEO', 102, 1, 'APPROVED', NOW(),
  'All five conditional types in one video — Lucy''s on-screen tables make it easy to pause and take notes.'
),
(
  'Anglo-Link: English Conditionals — Complete Guide (YouTube)',
  'Calm, methodical explanation of all conditional types with contrastive examples showing what changes between each type.',
  'https://www.youtube.com/watch?v=EwKDyDmEJBE',
  'VIDEO', 102, 1, 'APPROVED', NOW(),
  'The contrastive approach (showing what changes between types) makes the patterns much easier to internalise than studying each type in isolation.'
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
  'EngVid: Phrasal Verbs with GET (YouTube)',
  'Adam from EngVid teaches the 12 most important phrasal verbs with "get" using clear definitions and real-life example sentences.',
  'https://www.youtube.com/watch?v=0jXEgSAlkBw',
  'VIDEO', 103, 1, 'APPROVED', NOW(),
  'Adam''s systematic approach — each phrasal verb gets a definition, example and memory hook so you actually remember them.'
),
(
  'English with Lucy: Phrasal Verbs with GET — 20 Examples (YouTube)',
  'Lucy walks through 20 phrasal verbs with "get" in natural conversational sentences, with on-screen text for each one.',
  'https://www.youtube.com/watch?v=nKLGl3qXvNA',
  'VIDEO', 103, 1, 'APPROVED', NOW(),
  'Lucy uses natural pacing so you hear how these phrasal verbs really sound in connected speech — not just isolated definitions.'
);

-- ── Topic 104: Confusing homophones ──────────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'Grammarly: Your vs You''re — Once and for All',
  'Clear article with memorable tricks for your/you''re, their/there/they''re, affect/effect and more. Includes a mini quiz.',
  'https://www.grammarly.com/blog/youre-vs-your/',
  'LINK', 104, 1, 'APPROVED', NOW(),
  'Short, shareable article — the substitution tricks are genuinely memorable and tested in an embedded quiz.'
),
(
  'There, Their, They''re — Never Confuse Them Again (YouTube)',
  'Animated explainer video teaching the difference between the three "there/their/they''re" homophones with memorable visual mnemonics.',
  'https://www.youtube.com/watch?v=ZC3GYBdQVLo',
  'VIDEO', 104, 1, 'APPROVED', NOW(),
  'Visual mnemonics — the animation makes each rule stick in memory far better than a written explanation alone.'
),
(
  'BBC Learning English: Commonly Confused Words (YouTube)',
  'BBC video covering affect/effect, your/you''re, their/there/they''re and six other commonly confused word pairs with example sentences.',
  'https://www.youtube.com/watch?v=EiWDvGGvXwQ',
  'VIDEO', 104, 1, 'APPROVED', NOW(),
  'Covers all the major confusable pairs in one place — useful to watch just before an important piece of writing.'
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
  'English with Lucy: British vs American English — 100 Differences (YouTube)',
  'Lucy films this video in both accents showing 100 vocabulary differences between British and American English side by side.',
  'https://www.youtube.com/watch?v=WkzrZBp-KGQ',
  'VIDEO', 105, 1, 'APPROVED', NOW(),
  'Hearing both accents say the same word back-to-back is the fastest way to internalise the differences — highly shareable.'
),
(
  'BBC Learning English: American English vs British English Pronunciation (YouTube)',
  'BBC video focusing specifically on pronunciation differences: "can''t", "water", "letter" and more compared side by side.',
  'https://www.youtube.com/watch?v=kmFKN8_4KY4',
  'VIDEO', 105, 1, 'APPROVED', NOW(),
  'Pronunciation-focused — complements vocabulary lists by showing the phonetic differences that affect everyday listening.'
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
  'EnglishClass101: -ED Ending Pronunciation Explained (YouTube)',
  'Structured lesson breaking down the voiced/voiceless distinction that determines whether -ed sounds like /t/, /d/ or /ɪd/.',
  'https://www.youtube.com/watch?v=o-kBSIqQH8s',
  'VIDEO', 106, 1, 'APPROVED', NOW(),
  'Uses a clear voiced/voiceless framework rather than a memorised list — once you understand voicing, the rule applies automatically.'
),
(
  '-ED Pronunciation Rule — EnglishClub Reference',
  'One-page reference grouping common verbs by their -ed ending pronunciation with a decision flowchart.',
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
  'Rachel''s English: Connected Speech in American English (YouTube)',
  'Rachel explains how native speakers link, reduce and drop sounds in fast speech — the key to understanding real conversations.',
  'https://www.youtube.com/watch?v=R3z_jUcaYLQ',
  'VIDEO', 107, 1, 'APPROVED', NOW(),
  'Connected speech is the number-one reason learners can''t understand native speakers at full speed — this video demystifies it.'
),
(
  'Shadowing Technique Guide — Fluency Fast-Track',
  'Written guide explaining the shadowing method step by step: choosing material, listening, pausing, mirroring, then full speed.',
  'https://www.fluentu.com/blog/english/shadowing-language-learning/',
  'LINK', 107, 1, 'APPROVED', NOW(),
  'Clear how-to article on shadowing — the most scientifically supported technique for speaking fluency.'
),
(
  'BBC 6 Minute English: Conversation Chunks (BBC)',
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
  'Formal Email Phrases — Opening to Sign-off',
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
),
(
  'English with Lucy: Formal Email Writing Tips (YouTube)',
  'Lucy covers common mistakes in formal emails and shows before/after rewrites that transform awkward emails into polished ones.',
  'https://www.youtube.com/watch?v=3_ZpBMKMWMM',
  'VIDEO', 108, 1, 'APPROVED', NOW(),
  'Before/after rewrites are the most effective teaching format for writing — you immediately see what good looks like.'
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
  'IELTS Liz: Task 2 Essay Structure Guide',
  'Free guide by IELTS Liz (score 8.5+ coach) explaining her four-paragraph band-9 essay structure with a worked example.',
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
),
(
  'IELTS Liz: Task 2 Introduction Paragraph (YouTube)',
  'IELTS Liz explains exactly how to write a band-9 introduction in under 3 minutes — paraphrase the question and state your thesis.',
  'https://www.youtube.com/watch?v=hIRMOlwRoMo',
  'VIDEO', 109, 1, 'APPROVED', NOW(),
  'The introduction is where most candidates lose marks — this short video removes all the guesswork about what to write.'
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
),
(
  'IELTS vs TOEFL — Which Should You Take? (YouTube)',
  'Head-to-head comparison video explaining the format differences, difficulty, cost and global recognition of both exams.',
  'https://www.youtube.com/watch?v=9g4G_eDHoGI',
  'VIDEO', 110, 1, 'APPROVED', NOW(),
  'Video format is ideal for this topic — the side-by-side comparison tables are much clearer than reading about differences.'
),
(
  'E2 IELTS: How to Prepare for IELTS in 30 Days (YouTube)',
  'Realistic 30-day preparation plan video by E2 IELTS covering all four sections with recommended daily practice routines.',
  'https://www.youtube.com/watch?v=OHOwt_0XDPQ',
  'VIDEO', 110, 1, 'APPROVED', NOW(),
  'The day-by-day structure removes the most common student problem: not knowing what to practise and in what order.'
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
  'B2 First Speaking Test — Full Demonstration (YouTube)',
  'Complete mock B2 First speaking test on YouTube with two candidates going through all four parts and examiner commentary at the end.',
  'https://www.youtube.com/watch?v=bIVwj6nPZrI',
  'VIDEO', 111, 1, 'APPROVED', NOW(),
  'Watching a full mock test is the best exam preparation — you know exactly what to expect on test day and can time yourself.'
),
(
  'B2 First Speaking: Useful Phrases for All 4 Parts',
  'Cambridge English page listing language functions and useful expressions for each part of the B2 First speaking exam.',
  'https://www.cambridgeenglish.org/exams-and-tests/first/preparation/',
  'LINK', 111, 1, 'APPROVED', NOW(),
  'Official Cambridge preparation page — everything you need for exam day including sample papers and speaking resources.'
);

-- ── Topic 112: Student Lounge ─────────────────────────────────────────────────
INSERT IGNORE INTO resources (title, description, url, type, topic_id, user_id, status, created_at, ai_summary) VALUES
(
  'CEFR Self-Assessment Grid — What Level Am I?',
  'Official Council of Europe self-assessment grid (A1 to C2) with "can do" statements to help you identify your current level.',
  'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale',
  'LINK', 112, 1, 'APPROVED', NOW(),
  'Official CEFR grid — a 5-minute self-check that tells you exactly where you sit and what to work on next.'
),
(
  'How to Learn English Fast — 10 Tips That Actually Work (YouTube)',
  'Practical YouTube video covering the 10 most effective habits of successful English learners — backed by language acquisition research.',
  'https://www.youtube.com/watch?v=XqTLnqC-GOY',
  'VIDEO', 112, 1, 'APPROVED', NOW(),
  'Research-backed tips presented clearly — ideal to watch at the start of your learning journey to set good habits early.'
),
(
  'How I Became Fluent in English — Student Story (YouTube)',
  'Motivational video where a non-native English speaker shares the exact methods they used to go from B1 to C1 in under a year.',
  'https://www.youtube.com/watch?v=PbwBBHMdpA0',
  'VIDEO', 112, 1, 'APPROVED', NOW(),
  'Personal story format — more motivating than a tips list because you see a real person''s journey with realistic timelines.'
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
),
(
  'Best TV Shows to Learn English — Ranked by Level (YouTube)',
  'YouTube video ranking the most popular TV shows from easiest to hardest for English learners, with clips and explanation of why each works.',
  'https://www.youtube.com/watch?v=j0_wFMxz3V0',
  'VIDEO', 113, 1, 'APPROVED', NOW(),
  'Seeing short clips from each show lets you immediately judge whether the pace and vocabulary level suits you.'
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
  'Podbean: The English We Speak — BBC',
  'Direct link to "The English We Speak" BBC podcast feed — 3-minute episodes each teaching one idiom or expression in context.',
  'https://www.bbc.co.uk/programmes/p02pc9gg/episodes/downloads',
  'LINK', 114, 1, 'APPROVED', NOW(),
  'Bite-sized 3-minute episodes — one idiom per episode with native speaker dialogue. Perfect for your commute.'
),
(
  'Best English Podcasts for Every Level — Full Review (YouTube)',
  'YouTube review comparing BBC 6 Minute English, All Ears English, English Learning for Curious Minds and 4 others — with audio samples.',
  'https://www.youtube.com/watch?v=9E9MBG-XPGE',
  'VIDEO', 114, 1, 'APPROVED', NOW(),
  'Hearing short clips from each podcast saves hours of trial-and-error — pick the right one for your level from day one.'
),
(
  'How to Use Podcasts to Improve Your English (YouTube)',
  'Step-by-step method for getting maximum learning value from English podcasts: active vs passive listening, transcript use, note-taking.',
  'https://www.youtube.com/watch?v=FkP6BKBCV6Y',
  'VIDEO', 114, 1, 'APPROVED', NOW(),
  'Most learners listen passively and barely improve — this video shows the active technique that actually builds vocabulary and grammar.'
);

SET FOREIGN_KEY_CHECKS = 1;
