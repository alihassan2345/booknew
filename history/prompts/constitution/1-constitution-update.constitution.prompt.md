---
id: 1
title: constitution-update
stage: constitution
date: 2025-12-24
surface: agent
model: Claude Sonnet 4.5
feature: none
branch: master
user: Claude Code
command: /sp.constitution
labels: ["constitution", "spec-driven", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests: []
---

## Prompt

**Project:** Unified AI-Native Book & Integrated RAG Chatbot

**Core Principles:**
- **Spec-Driven Consistency:** All development must strictly adhere to specifications generated via Spec-Kit Plus.
- **Modularity:** Separation of concerns between the Docusaurus frontend, FastAPI backend, and Vector DB.
- **Contextual Grounding:** The chatbot must strictly prioritize the book's content and user-selected text to prevent hallucinations.
- **Performance:** Optimized embedding retrieval and fast UI response times for a seamless reading experience.

**Key Standards:**
- **Frontend Framework:** Docusaurus (latest stable version).
- **Backend Stack:** FastAPI with OpenAI Agents SDK.
- **Database Architecture:** Neon Serverless Postgres (Relational) and Qdrant Cloud (Vector Store).
- **CI/CD:** Automated deployment of the book to GitHub Pages.
- **API Design:** RESTful endpoints for the chatbot communication.

**Functional Requirements:**
- **Book Generation:** Content must be structured, readable, and properly indexed for RAG.
- **RAG Implementation:** Automated ingestion pipeline to sync Docusaurus Markdown files into Qdrant Cloud.
- **User-Selection Logic:** Chatbot must accept and process "selected-text" as a primary context window when provided by the user.
- **UI Integration:** The chatbot widget must be natively integrated into the Docusaurus theme/layout.

**Constraints:**
- **Tooling:** Development must be performed using Claude Code and Spec-Kit Plus.
- **Infrastructure:** Use only Free Tier services for Neon and Qdrant Cloud.
- **Security:** Strict use of `.env` files for OpenAI, Neon, and Qdrant credentials; zero-exposure policy for secrets.
- **Environment:** Must be compatible with GitHub Actions for deployment.

**Success Criteria:**
- Successfully deployed Docusaurus site on GitHub Pages.
- Fully functional RAG chatbot embedded in the site.
- Chatbot accurately answers questions based *only* on the book's content.
- Chatbot successfully handles the "answer based on selected text" feature.
- All code passes linting and follows Spec-Kit Plus project structure.

## Response snapshot

Updated the project constitution at `.specify/memory/constitution.md` with the provided principles and requirements. The new constitution includes:

- Core Principles: Spec-Driven Consistency, Modularity, Contextual Grounding, Performance, Security and Infrastructure Constraints, Tooling and Environment Compatibility
- Key Standards: Technology stack and architectural decisions
- Functional Requirements: Specific requirements for the book generation and RAG chatbot
- Governance: Rules and procedures for development
- Sync Impact Report: Documenting the changes and template consistency

## Outcome

- ✅ Impact: Created initial project constitution with all specified principles
- 🧪 Tests: No tests required for constitution update
- 📁 Files: Updated .specify/memory/constitution.md, created history/prompts/constitution/1-constitution-update.constitution.prompt.md
- 🔁 Next prompts: Plan and implement the core features based on the constitution
- 🧠 Reflection: Constitution now serves as the authoritative source for project principles and constraints

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature specification based on constitution