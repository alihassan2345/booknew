---
id: 3
title: physical-ai-book-tasks
stage: tasks
date: 2025-12-24
surface: agent
model: Claude Sonnet 4.5
feature: physical-ai-book
branch: 001-physical-ai-book
user: Claude Code
command: /sp.tasks
labels: ["tasks", "docusaurus", "fastapi", "rag", "implementation"]
links:
  spec: specs/001-physical-ai-book/spec.md
  plan: specs/001-physical-ai-book/plan.md
  adr: null
  pr: null
files:
  - specs/001-physical-ai-book/tasks.md
tests: []
---

## Prompt

Physical AI Book & RAG Chatbot

## Phase 1: Docusaurus Setup & Content (Book)
- [ ] **Task 1.1:** Scaffold Docusaurus project using `npx create-docusaurus@latest website classic`.
- [ ] **Task 1.2:** Configure `docusaurus.config.js` with project naming, GitHub repository links, and deployment settings.
- [ ] **Task 1.3:** Create directory structure in `/docs` for:
    - `module-1-ros2`
    - `module-2-digital-twin`
    - `module-3-isaac-sim`
    - `module-4-vla`
    - `hardware-requirements`
- [ ] **Task 1.4:** Generate Markdown content for all 4 modules and the 13-week breakdown using the provided specifications.
- [ ] **Task 1.5:** Configure `sidebars.js` to ensure logical flow from Introduction to Capstone Project.
- [ ] **Task 1.6:** Setup GitHub Actions workflow for automated deployment to GitHub Pages.

## Phase 2: RAG Backend (FastAPI & DBs)
- [ ] **Task 2.1:** Setup FastAPI project structure with `main.py`, `models.py`, and `services/`.
- [ ] **Task 2.2:** Configure Neon Postgres connection for session management and logging.
- [ ] **Task 2.3:** Initialize Qdrant Cloud collection with appropriate vector dimensions (1536 for OpenAI).
- [ ] **Task 2.4:** Develop `ingest.py` script to:
    - Read all `.md` files from Docusaurus.
    - Chunk text and generate embeddings via OpenAI.
    - Store vectors in Qdrant with metadata (file path, title).
- [ ] **Task 2.5:** Implement RAG query endpoint using OpenAI Agents SDK to retrieve context from Qdrant.

## Phase 3: Chatbot Frontend & Features
- [ ] **Task 3.1:** Create a React Chatbot component in Docusaurus (`src/components/Chatbot`).
- [ ] **Task 3.2:** Add a "Ask AI" floating action button (FAB) to the Docusaurus theme.
- [ ] **Task 3.3:** Implement "Selected Text" functionality:
    - Use `window.getSelection()` to capture highlighted text.
    - Pass this text as a specific `context` parameter to the FastAPI backend.
- [ ] **Task 3.4:** Style the chat interface to match the Docusaurus "Infima" design system.

## Phase 4: Final Polish & Testing
- [ ] **Task 4.1:** Conduct "Grounding Test" (Ensure AI doesn't answer out-of-scope questions).
- [ ] **Task 4.2:** Test responsiveness of the UI on mobile and desktop.
- [ ] **Task 4.3:** Final documentation update: Add `README.md` for local setup instructions.

## Response snapshot

Generated comprehensive task list for the Physical AI Book & RAG Chatbot project. The tasks.md file includes:

1. **Phase 1: Setup** - 4 tasks for project initialization and basic structure
2. **Phase 2: Foundational** - 7 tasks for core infrastructure including database models, API structure, and configuration
3. **Phase 3: User Story 1** - 7 tasks for core book content access (P1 priority)
4. **Phase 4: User Story 2** - 5 tasks for module navigation (P2 priority)
5. **Phase 5: User Story 3** - 7 tasks for technical content and code examples (P3 priority)
6. **Phase 6: User Story 4** - 5 tasks for hardware requirements and specifications (P3 priority)
7. **Phase 7: RAG Backend** - 9 tasks for backend infrastructure with FastAPI, Neon, and Qdrant
8. **Phase 8: Chatbot Frontend** - 9 tasks for frontend integration with React components
9. **Phase 9: Polish** - 7 tasks for documentation, testing, and final validation

The tasks follow the required format with checkboxes, task IDs, parallel markers [P], and user story labels [US1], [US2], etc. Each task includes specific file paths where applicable. The implementation strategy includes MVP-first approach, parallel execution opportunities, and dependency tracking between phases.

## Outcome

- ✅ Impact: Complete task breakdown for Physical AI Book & RAG Chatbot implementation
- 🧪 Tests: Test tasks included where appropriate
- 📁 Files: Created specs/001-physical-ai-book/tasks.md
- 🔁 Next prompts: Begin implementation of tasks
- 🧠 Reflection: Tasks organized by user story priority with clear dependencies

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Start with Phase 1 Setup tasks