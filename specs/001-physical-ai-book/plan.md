# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

The Physical AI & Humanoid Robotics Book project involves creating a comprehensive technical book using Docusaurus with an integrated RAG chatbot. The implementation will follow a modular architecture with a Docusaurus frontend for content presentation and a FastAPI backend for RAG functionality. The system will leverage Neon Postgres for metadata and chat history, and Qdrant Cloud for vector embeddings of the book content.

The primary requirement is to deliver educational content on Physical AI, ROS 2, Digital Twins, and Vision-Language-Action models in a structured format with four core modules. The RAG chatbot will allow users to ask questions about the book content with strict grounding to prevent hallucinations, including a special "Selected Text" feature that prioritizes user-highlighted content as context.

Based on the research, we've selected a technology stack that includes Docusaurus for the frontend, FastAPI for the backend, with Neon Postgres and Qdrant Cloud for data storage. The implementation approach follows security best practices with environment variable management and adheres to the project's constraint of using free-tier services.

## Technical Context

**Language/Version**:
- Frontend: JavaScript/TypeScript for Docusaurus (Node.js v18+)
- Backend: Python 3.11+ for FastAPI
- Database interaction: Python async libraries

**Primary Dependencies**:
- Frontend: Docusaurus 3.x, React 18.x, Node.js
- Backend: FastAPI 0.104+, Python 3.11+, OpenAI Python SDK, SQLAlchemy
- Vector DB: Qdrant client for Python
- Relational DB: Neon Postgres driver for Python
- AI/ML: OpenAI Agents SDK

**Storage**:
- Vector Database: Qdrant Cloud (Free Tier) for embeddings
- Relational Database: Neon Postgres Serverless for metadata and chat history
- Static Content: GitHub Pages for Docusaurus deployment

**Testing**:
- Backend: pytest with FastAPI test client
- Frontend: Jest and React Testing Library
- Integration: end-to-end tests with Playwright

**Target Platform**:
- Frontend: Web browsers (Chrome, Firefox, Safari, Edge)
- Backend: Cloud deployment (compatible with containerization)

**Project Type**: Web application with frontend (Docusaurus) and backend (FastAPI) components

**Performance Goals**:
- Docusaurus site load time: <3 seconds for initial page load
- Chatbot response time: <5 seconds for RAG queries
- Embedding processing: <10 seconds per document during ingestion

**Constraints**:
- Must use Free Tier services for Neon and Qdrant Cloud
- Strict use of `.env` files for OpenAI, Neon, and Qdrant credentials
- GitHub Actions for CI/CD
- Docusaurus-specific Markdown formatting required

**Scale/Scope**:
- Target: 1000+ daily active users during course delivery
- Content: 4 modules with 10-20 pages each
- Concurrent chat sessions: up to 100 simultaneous users

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Compliance Verification

**Spec-Driven Consistency**: ✓ PASS
- All development will strictly adhere to specifications generated via Spec-Kit Plus
- Implementation follows the feature specification in `/specs/001-physical-ai-book/spec.md`

**Modularity**: ✓ PASS
- Clear separation of concerns between Docusaurus frontend, FastAPI backend, and Vector DB
- Frontend (Docusaurus) handles content presentation
- Backend (FastAPI) manages RAG logic and API endpoints
- Vector DB (Qdrant) stores embeddings for retrieval

**Contextual Grounding**: ✓ PASS
- Chatbot will strictly prioritize the book's content and user-selected text
- Implementation includes "Selected Text" endpoint that prioritizes user-highlighted content
- RAG pipeline retrieves context only from book content to prevent hallucinations

**Performance**: ✓ PASS
- Optimized embedding retrieval with performance goals defined (<5s response time)
- Fast UI response times through efficient frontend architecture

**Security and Infrastructure Constraints**: ✓ PASS
- Strict use of `.env` files for OpenAI, Neon, and Qdrant credentials
- Zero-exposure policy for secrets maintained through environment variables
- Using Free Tier services for Neon and Qdrant Cloud as required

**Tooling and Environment Compatibility**: ✓ PASS
- Development performed using Claude Code and Spec-Kit Plus as required
- Compatible with GitHub Actions for deployment to GitHub Pages

## Project Structure

### Documentation (this feature)

```text
specs/001-physical-ai-book/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
│   └── chat-api.yaml
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── models/
│   │   ├── chat_session.py
│   │   ├── chat_message.py
│   │   ├── document_metadata.py
│   │   └── user_selection.py
│   ├── services/
│   │   ├── rag_service.py
│   │   ├── chat_service.py
│   │   ├── ingestion_service.py
│   │   └── embedding_service.py
│   ├── api/
│   │   ├── chat_router.py
│   │   ├── ingestion_router.py
│   │   └── main.py
│   └── utils/
│       ├── document_parser.py
│       └── text_splitter.py
├── scripts/
│   ├── init_qdrant.py
│   ├── ingest_docs.py
│   └── setup_db.py
├── tests/
│   ├── unit/
│   ├── integration/
│   └── contract/
├── requirements.txt
├── alembic/
└── .env.example

frontend/
├── docs/
│   ├── Module-1-ROS2/
│   ├── Module-2-Simulation/
│   ├── Module-3-Nvidia-Isaac/
│   ├── Module-4-VLA/
│   ├── Hardware/
│   └── Curriculum/
├── src/
│   ├── components/
│   │   ├── ChatWidget/
│   │   │   ├── ChatWidget.jsx
│   │   │   ├── ChatMessage.jsx
│   │   │   └── ChatInput.jsx
│   │   └── SelectionHandler/
│   │       └── SelectionHandler.js
│   ├── pages/
│   ├── css/
│   └── utils/
├── static/
├── docusaurus.config.js
├── sidebars.js
├── package.json
├── babel.config.js
└── .env.example

scripts/
├── deploy-frontend.sh
└── setup-project.sh

.env
README.md
```

**Structure Decision**: This is a web application with separate frontend (Docusaurus) and backend (FastAPI) components as detected from the requirements. The frontend handles content presentation and chat UI, while the backend manages RAG logic, API endpoints, and data processing. This separation aligns with the modularity principle from the constitution.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No constitution violations require justification. All implementation decisions align with the project's core principles.
