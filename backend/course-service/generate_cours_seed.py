# -*- coding: utf-8 -*-
"""Generate cours.sql: 10 modules, 10-20 courses each, 1 quiz/course, 10-20 questions/quiz, 3-5 answers/question (exactly one correct)."""
from __future__ import annotations

import textwrap

# Number of courses per module (each between 10 and 20)
COURSES_PER_MODULE = [12, 15, 18, 10, 20, 14, 16, 11, 19, 13]

MODULE_THEMES = [
    ("Grammaire française fondamentale", "Les bases de la syntaxe et de la morphologie.", "Débutant", "Français langue étrangère"),
    ("Vocabulaire thématique", "Lexique courant par domaines (travail, voyage, santé).", "Intermédiaire", "Lexique"),
    ("Compréhension orale", "Écoute de dialogues et d'annonces authentiques.", "Intermédiaire", "Oral"),
    ("Expression écrite", "Rédiger emails, courtes descriptions et opinions.", "Intermédiaire", "Écrit"),
    ("Expression orale", "Prise de parole en interaction et présentations courtes.", "Avancé", "Oral"),
    ("Culture et civilisation", "Repères historiques, institutions et vie quotidienne.", "Intermédiaire", "Culture"),
    ("Orthographe et conjugaison", "Accords, homophones et temps verbaux essentiels.", "Débutant", "Orthographe"),
    ("Lecture et analyse de textes", "Comprendre et résumer des articles et récits.", "Avancé", "Lecture"),
    ("Phonétique et prononciation", "Sons du français, enchaînements et accentuation.", "Débutant", "Phonétique"),
    ("Préparation certification", "Stratégies d'examen et mises en situation type DELF.", "Avancé", "Certification"),
]


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "''")


def main() -> None:
    lines: list[str] = []
    w = lines.append

    w(
        """-- Import phpMyAdmin : sélectionnez d'abord votre base (ex. projetpi), puis Importer ce fichier.
-- Recrée les tables : modules, cours, quizzes, questions, reponses (DROP certificats si présent : FK vers quizzes).
-- Données : 10 modules, 10–20 cours/module, 1 quiz/cours, 10–20 questions/quiz, 3–5 réponses/question (une seule correcte).
--
-- Si la base n'existe pas, décommentez :
-- CREATE DATABASE IF NOT EXISTS projetpi CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
-- USE projetpi;

SET NAMES utf8mb4;
START TRANSACTION;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS reponses;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS quizzes;
DROP TABLE IF EXISTS certificats;
DROP TABLE IF EXISTS cours;
DROP TABLE IF EXISTS modules;

CREATE TABLE modules (
  id BIGINT NOT NULL AUTO_INCREMENT,
  titre VARCHAR(255) NOT NULL,
  description VARCHAR(2000) DEFAULT NULL,
  niveau VARCHAR(100) DEFAULT NULL,
  categorie VARCHAR(150) DEFAULT NULL,
  duree_totale INT DEFAULT NULL,
  actif TINYINT(1) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE cours (
  id BIGINT NOT NULL AUTO_INCREMENT,
  contenu VARCHAR(10000) DEFAULT NULL,
  duree INT DEFAULT NULL,
  gratuit BIT(1) DEFAULT NULL,
  ordre_cours INT DEFAULT NULL,
  publie BIT(1) DEFAULT NULL,
  titre VARCHAR(255) NOT NULL,
  type_contenu VARCHAR(100) DEFAULT NULL,
  url_ressource VARCHAR(500) DEFAULT NULL,
  module_id BIGINT NOT NULL,
  fichier_pdf LONGBLOB DEFAULT NULL,
  nom_fichier_pdf VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY idx_cours_module (module_id),
  CONSTRAINT fk_cours_module FOREIGN KEY (module_id) REFERENCES modules (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE quizzes (
  id BIGINT NOT NULL AUTO_INCREMENT,
  titre VARCHAR(255) NOT NULL,
  description VARCHAR(2000) DEFAULT NULL,
  score_max DOUBLE DEFAULT NULL,
  cours_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  KEY idx_quizzes_cours (cours_id),
  CONSTRAINT fk_quizzes_cours FOREIGN KEY (cours_id) REFERENCES cours (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE questions (
  id BIGINT NOT NULL AUTO_INCREMENT,
  enonce VARCHAR(4000) DEFAULT NULL,
  type_question VARCHAR(100) DEFAULT NULL,
  points DOUBLE DEFAULT NULL,
  quiz_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  KEY idx_questions_quiz (quiz_id),
  CONSTRAINT fk_questions_quiz FOREIGN KEY (quiz_id) REFERENCES quizzes (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE reponses (
  id BIGINT NOT NULL AUTO_INCREMENT,
  texte VARCHAR(2000) DEFAULT NULL,
  correcte TINYINT(1) DEFAULT NULL,
  question_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  KEY idx_reponses_question (question_id),
  CONSTRAINT fk_reponses_question FOREIGN KEY (question_id) REFERENCES questions (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

"""
    )

    module_ids = list(range(1, 11))
    for mid, (title, desc, niveau, cat) in zip(module_ids, MODULE_THEMES):
        w(
            "INSERT INTO modules (id, titre, description, niveau, categorie, duree_totale, actif) VALUES "
            f"({mid}, '{esc(title)}', '{esc(desc)}', '{esc(niveau)}', '{esc(cat)}', 0, 1);"
        )

    course_id = 0
    quiz_id = 0
    question_id = 0
    reponse_id = 0

    # Track module total duration for duree_totale update
    module_duree: dict[int, int] = {m: 0 for m in module_ids}

    course_rows: list[str] = []
    quiz_rows: list[str] = []
    question_rows: list[str] = []
    reponse_rows: list[str] = []

    type_cycle = ("VIDEO", "TEXTE", "PDF", "AUDIO")

    for mid in module_ids:
        n_courses = COURSES_PER_MODULE[mid - 1]
        for local_ord in range(1, n_courses + 1):
            course_id += 1
            quiz_id += 1
            theme = MODULE_THEMES[mid - 1][0]
            ctitre = f"{theme} — Leçon {local_ord}"
            ccont_raw = (
                f"Dans cette leçon, vous consoliderez les objectifs du module « {theme} » "
                f"(partie {local_ord}). Activités guidées, exemples et mise en pratique."
            )
            duree = 20 + (course_id * 7) % 71  # 20–90 min
            module_duree[mid] += duree
            tcont = type_cycle[course_id % len(type_cycle)]
            url = f"https://resources.fluency.local/module{mid}/cours{course_id}"
            course_rows.append(
                "("
                f"{course_id}, '{esc(ccont_raw)}', {duree}, b'0', {local_ord}, b'1', '{esc(ctitre)}', "
                f"'{tcont}', '{esc(url)}', {mid}, NULL, NULL)"
            )

            qz_titre = f"Quiz — {ctitre}"
            qz_desc = f"Évaluez vos acquis après la leçon {local_ord}."
            n_questions = 10 + (course_id % 11)  # 10..20
            score_max = float(n_questions)
            quiz_rows.append(
                f"({quiz_id}, '{esc(qz_titre)}', '{esc(qz_desc)}', {score_max}, {course_id})"
            )

            for qn in range(1, n_questions + 1):
                question_id += 1
                enonce = (
                    f"(Module {mid}, cours {local_ord}) Quelle formulation est correcte pour l'exercice {qn} "
                    f"portant sur « {esc(theme)} » ?"
                )
                question_rows.append(
                    f"({question_id}, '{esc(enonce)}', 'QCM', 1.0, {quiz_id})"
                )

                n_rep = 3 + (question_id % 3)  # 3, 4 ou 5
                correct_idx = question_id % n_rep
                for ri in range(n_rep):
                    is_correct = 1 if ri == correct_idx else 0
                    reponse_id += 1
                    if is_correct:
                        txt = f"Réponse correcte : formulation validée pour la question {qn}."
                    else:
                        txt = f"Proposition incorrecte {ri + 1} (piège courant) — question {qn}."
                    reponse_rows.append(
                        f"({reponse_id}, '{esc(txt)}', {is_correct}, {question_id})"
                    )

    w("\n-- Modules totals (minutes)\n")
    for mid, total in module_duree.items():
        w(f"UPDATE modules SET duree_totale = {total} WHERE id = {mid};")

    def batched_insert(table: str, cols: str, rows: list[str], batch: int = 400) -> None:
        for i in range(0, len(rows), batch):
            chunk = rows[i : i + batch]
            w(f"\nINSERT INTO {table} ({cols}) VALUES\n" + ",\n".join(chunk) + ";")

    batched_insert(
        "cours",
        "id, contenu, duree, gratuit, ordre_cours, publie, titre, type_contenu, url_ressource, module_id, fichier_pdf, nom_fichier_pdf",
        course_rows,
    )
    batched_insert("quizzes", "id, titre, description, score_max, cours_id", quiz_rows)
    batched_insert(
        "questions",
        "id, enonce, type_question, points, quiz_id",
        question_rows,
    )
    batched_insert("reponses", "id, texte, correcte, question_id", reponse_rows)

    w(
        textwrap.dedent(
            """

            ALTER TABLE modules AUTO_INCREMENT = 11;
            ALTER TABLE cours AUTO_INCREMENT = {cid};
            ALTER TABLE quizzes AUTO_INCREMENT = {qid};
            ALTER TABLE questions AUTO_INCREMENT = {quid};
            ALTER TABLE reponses AUTO_INCREMENT = {rid};

            SET FOREIGN_KEY_CHECKS = 1;
            COMMIT;
            """
        ).format(cid=course_id + 1, qid=quiz_id + 1, quid=question_id + 1, rid=reponse_id + 1)
    )

    out_path = "cours.sql"
    with open(out_path, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(lines))

    print(f"Wrote {out_path}: modules=10, cours={course_id}, quizzes={quiz_id}, questions={question_id}, reponses={reponse_id}")


if __name__ == "__main__":
    main()
