# SCRUMHACK — PSM I Brain Training

Offline-first PWA for passing the PSM I (scrum.org) certification on the first attempt.
Built on Scrum Guide 2020.

**Live:** https://emillion-lab.github.io/SCRUMHACK/

## Learning engine
- Spaced repetition flashcards (Leitner/SM-2 lite) — 55 cards, 4 categories
- Retrieval practice quizzes with instant explanations — L1 Foundations, L2 Tricky Rules
- 85% gates between levels (real exam pass mark)
- Exam simulator: 40Q / 30min — exact pace of the real PSM I (80Q/60min), attempt history chart
- Listen mode: TTS audio flashcards with lock-screen controls (Media Session API)
- Mnemonic wall + 3·5·3 map + Sprint cycle diagram (dual coding)
- Streaks; all progress in localStorage; fully offline after first load

## Architecture
`index.html` is assembled by GitHub Actions from `src/p1..p6` (single-file app, no build deps).
Edit parts in `src/`, push, CI rebuilds.

## Install on Android
Open the live URL in Chrome → menu → Add to Home screen.

## Before booking the real exam
Pass the simulator twice in a row, then take the official free
[Scrum Open assessment](https://www.scrum.org/open-assessments/scrum-open) — 95%+ there means you're ready for PSM I.
