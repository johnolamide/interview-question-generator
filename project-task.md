# Interview Question Generator — Project Task Board

## Overview
A lightweight web app where a user enters a job title and an AI API generates 3 thoughtful, role-specific interview questions. Designed to help hiring managers and HR teams quickly prepare for interviews.

---

## Stack
- **Framework:** React (Vite)
- **Language:** TypeScript (TSX)
- **Styling:** SCSS
- **Package Manager:** Bun
- **AI API:** Google Gemini (via ai.google.dev)
- **Deployment:** Vercel or Netlify

---

## Folder & File Structure

```
interview-question-generator/
├── .env                        # VITE_GEMINI_API_KEY=your_key
├── .gitignore
├── index.html
├── package.json
├── vite.config.ts
├── bun.lockb
├── project-task.md
└── src/
    ├── main.tsx                # App entry point
    ├── App.tsx                 # Root component
    ├── styles/
    │   ├── main.scss           # Global styles / resets
    │   └── components/
    │       ├── _form.scss
    │       ├── _loader.scss
    │       └── _results.scss
    ├── components/
    │   ├── QuestionForm.tsx    # Input + submit button
    │   ├── Loader.tsx          # Loading indicator
    │   └── QuestionList.tsx    # Renders the 3 questions
    └── api/
        └── gemini.ts           # Gemini API call + prompt logic
```

---

## Tasks

### 1. Project Setup
- [x] Initialise project with Vite + React using Bun (`bun create vite`)
- [x] Install dependencies (`bun install`)
- [x] Configure `.env` with `VITE_GEMINI_API_KEY`
- [x] Add `.env` to `.gitignore`
- [x] Set up SCSS support (install `sass` via Bun)

### 2. API Integration
- [x] Create `src/api/gemini.ts` with a `generateQuestions(jobTitle)` function
- [x] Write a prompt instructing the model to return exactly 3 specific, thoughtful interview questions
- [x] Handle API errors gracefully (network failure, bad response, empty input)

### 3. UI Components
- [ ] `QuestionForm.jsx` — controlled input + submit button, disables while loading
- [ ] `Loader.jsx` — visible only while API call is in progress
- [ ] `QuestionList.jsx` — renders the 3 returned questions as a numbered list

### 4. App Assembly
- [ ] Wire components together in `App.jsx` with state: `jobTitle`, `questions`, `loading`, `error`
- [ ] Call `generateQuestions` on form submit, update state accordingly
- [ ] Display inline error message on failure

### 5. Styling
- [ ] Global resets and base styles in `main.scss`
- [ ] Style each component via its corresponding SCSS partial
- [ ] Ensure responsive layout (mobile-friendly)

### 6. Deployment
- [ ] Push repo to GitHub
- [ ] Add `VITE_GEMINI_API_KEY` as a secret in GitHub and as an environment variable in Vercel/Netlify
- [ ] Connect repo to Vercel or Netlify and deploy
- [ ] Verify live URL works end-to-end
