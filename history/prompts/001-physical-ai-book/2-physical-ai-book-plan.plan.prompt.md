---
id: 2
title: physical-ai-book-plan
stage: plan
date: 2025-12-24
surface: agent
model: Claude Sonnet 4.5
feature: physical-ai-book
branch: 001-physical-ai-book
user: Claude Code
command: /sp.plan
labels: ["planning", "architecture", "docusaurus", "fastapi", "rag"]
links:
  spec: specs/001-physical-ai-book/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-physical-ai-book/plan.md
  - specs/001-physical-ai-book/research.md
  - specs/001-physical-ai-book/data-model.md
  - specs/001-physical-ai-book/quickstart.md
  - specs/001-physical-ai-book/contracts/chat-api.yaml
tests: []
---

## Prompt

Physical AI & Humanoid Robotics Project

**Objective:** Build a Docusaurus-based technical book with a fully integrated RAG chatbot using FastAPI, OpenAI, Neon, and Qdrant.

---

## Phase 1: Book Scaffolding & Content Development (Docusaurus)
1.  **Initialize Docusaurus:**
    - Create a Docusaurus project using the classic template.
    - Configure `docusaurus.config.js` with the project title and GitHub Pages settings.
2.  **Content Architecture:**
    - Structure the `/docs` directory into four main folders: `Module-1-ROS2`, `Module-2-Simulation`, `Module-3-Nvidia-Isaac`, and `Module-4-VLA`.
    - Create a `Hardware` section for RTX Workstation and Jetson Kit details.
    - Create a `Curriculum` section for the 13-week breakdown.
3.  **Content Generation:**
    - Populate Markdown files with technical content, code snippets for ROS 2, and hardware comparison tables based on the specification.
    - Ensure all files have proper frontmatter for Docusaurus sidebar ordering.
4.  **Deployment:**
    - Set up a GitHub Action to deploy the static site to GitHub Pages.

---

## Phase 2: RAG Backend Infrastructure (FastAPI & Databases)
1.  **Database Setup:**
    - Initialize **Neon Postgres** for storing document metadata and chat history.
    - Initialize **Qdrant Cloud** (Free Tier) collection for vector embeddings.
2.  **Backend Development (FastAPI):**
    - Create an ingestion script to parse `/docs/*.md` files.
    - Implement embedding logic using OpenAI `text-embedding-3-small`.
    - Upsert vectors into Qdrant with metadata pointing back to the book source.
3.  **Agent Logic (OpenAI Agents SDK):**
    - Develop a RAG pipeline that retrieves context from Qdrant.
    - Implement a special "Selected Text" endpoint that prioritizes user-highlighted content as the primary prompt context.

---

## Phase 3: Integration & UI Enhancement
1.  **Frontend Chat Widget:**
    - Create a custom Docusaurus React component for the Chatbot UI.
    - Integrate the widget into the Docusaurus theme (Global Footer or Sidebar).
2.  **User Selection Feature:**
    - Implement a JavaScript utility to capture window selection (highlighted text) and pass it to the chatbot state.
3.  **Testing & Verification:**
    - Verify that the chatbot only answers from the book's content (Grounding).
    - Test the "Answer based on selection" functionality.

---

## Implementation Constraints & Milestones
- **Milestone 1:** Docusaurus site live on GitHub Pages with all 4 modules.
- **Milestone 2:** FastAPI s

## Response snapshot

Created a comprehensive implementation plan for the Physical AI & Humanoid Robotics Book project. The plan includes:

1. **Summary**: Outlined the project's core components - Docusaurus frontend with FastAPI backend, using Neon Postgres and Qdrant Cloud for data storage.

2. **Technical Context**: Defined the technology stack:
   - Frontend: JavaScript/TypeScript for Docusaurus with Node.js v18+
   - Backend: Python 3.11+ for FastAPI with OpenAI Python SDK, SQLAlchemy
   - Databases: Qdrant Cloud for vectors, Neon Postgres for metadata
   - Testing: pytest, Jest, Playwright

3. **Constitution Check**: Verified compliance with all project principles:
   - Spec-Driven Consistency: ✓ PASS
   - Modularity: ✓ PASS
   - Contextual Grounding: ✓ PASS
   - Performance: ✓ PASS
   - Security and Infrastructure: ✓ PASS
   - Tooling Compatibility: ✓ PASS

4. **Project Structure**: Detailed the directory structure for both documentation and source code, separating frontend (Docusaurus) and backend (FastAPI) components.

5. **Created supporting files**:
   - research.md: Technology decisions and rationale
   - data-model.md: Entity definitions for Book Module, Page, ChatSession, ChatMessage, DocumentMetadata, and UserSelection
   - quickstart.md: Setup instructions for frontend, backend, and deployment
   - contracts/chat-api.yaml: OpenAPI specification for the RAG chat API

6. **Agent Context**: Updated the Claude Code context file with project-specific information.

The plan adheres to all constitutional principles and is ready for task generation using /sp.tasks.

## Outcome

- ✅ Impact: Comprehensive implementation plan created with architecture decisions
- 🧪 Tests: API contracts defined for testing
- 📁 Files: Created plan.md, research.md, data-model.md, quickstart.md, and chat-api.yaml
- 🔁 Next prompts: Generate tasks with /sp.tasks
- 🧠 Reflection: Plan follows modular architecture and security best practices

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Generate implementation tasks