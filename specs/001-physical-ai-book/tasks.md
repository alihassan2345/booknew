---
id: "tasks"
description: "Task list for Physical AI Book & RAG Chatbot feature"
---

# Tasks: Physical AI & Humanoid Robotics Book

**Input**: Design documents from `/specs/001-physical-ai-book/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 [P] Create project root directories: `backend/`, `frontend/`, `scripts/`
- [X] T002 [P] Initialize frontend directory with basic Docusaurus structure
- [X] T003 [P] Initialize backend directory with basic FastAPI structure
- [X] T004 [P] Create shared documentation files: README.md, .gitignore

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Setup frontend dependencies with package.json for Docusaurus
- [X] T006 [P] Setup backend dependencies with requirements.txt for FastAPI, OpenAI, SQLAlchemy
- [X] T007 [P] Configure docusaurus.config.js with project naming and GitHub settings
- [X] T008 [P] Setup database models for ChatSession, ChatMessage, DocumentMetadata, UserSelection in backend/src/models/
- [X] T009 Setup basic API routes structure in backend/src/api/
- [X] T010 Setup environment configuration management with .env.example files
- [X] T011 Setup GitHub Actions workflow file for deployment

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Access Physical AI Book Content (Priority: P1) 🎯 MVP

**Goal**: Enable users to access the comprehensive Physical AI & Humanoid Robotics Book content with proper structure

**Independent Test**: Users can visit the Docusaurus-based book site and browse well-structured modules with clear navigation and readable content

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [X] T012 [P] [US1] Integration test for homepage accessibility in tests/integration/test_homepage.py
- [X] T013 [P] [US1] End-to-end test for basic navigation in tests/e2e/test_navigation.py

### Implementation for User Story 1

- [X] T014 [P] [US1] Create Module-1-ROS2 directory structure in frontend/docs/Module-1-ROS2/
- [X] T015 [P] [US1] Create Module-2-Simulation directory structure in frontend/docs/Module-2-Simulation/
- [X] T016 [P] [US1] Create Module-3-Nvidia-Isaac directory structure in frontend/docs/Module-3-Nvidia-Isaac/
- [X] T017 [P] [US1] Create Module-4-VLA directory structure in frontend/docs/Module-4-VLA/
- [X] T018 [US1] Create introduction content page in frontend/docs/intro.md
- [X] T019 [US1] Configure sidebar navigation in frontend/sidebars.js to include all modules
- [X] T020 [US1] Add basic styling and layout in frontend/src/css/custom.css

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Navigate Book Modules (Priority: P2)

**Goal**: Enable users to navigate through structured modules following a progressive learning path from basic to advanced concepts

**Independent Test**: Users can navigate between modules and sections in a logical sequence that builds knowledge from basic to advanced concepts

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [X] T021 [P] [US2] Integration test for module navigation in tests/integration/test_module_nav.py
- [X] T022 [P] [US2] Unit test for sidebar configuration in tests/unit/test_sidebar.py

### Implementation for User Story 2

- [X] T023 [P] [US2] Create curriculum/weekly breakdown structure in frontend/docs/Curriculum/
- [X] T024 [P] [US2] Create hardware requirements section in frontend/docs/Hardware/
- [X] T025 [US2] Configure sidebar to support weekly breakdown navigation
- [X] T026 [US2] Implement logical flow from Introduction to Capstone Project in navigation
- [X] T027 [US2] Add breadcrumbs for module navigation in frontend/src/components/Breadcrumbs.jsx

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Access Technical Content and Code Examples (Priority: P3)

**Goal**: Enable users to access detailed technical content including code blocks for ROS 2 Python nodes and URDF XML snippets

**Independent Test**: Users can access and understand the technical examples provided, including code snippets and hardware specifications

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [X] T028 [P] [US3] Unit test for code block rendering in tests/unit/test_code_blocks.py
- [X] T029 [P] [US3] Integration test for technical content display in tests/integration/test_tech_content.py

### Implementation for User Story 3

- [X] T030 [P] [US3] Add ROS 2 Python node examples to Module-1-ROS2 content files
- [X] T031 [P] [US3] Add URDF XML snippets to Module-1-ROS2 content files
- [X] T032 [P] [US3] Add simulation examples to Module-2-Simulation content files
- [X] T033 [P] [US3] Add Isaac Sim examples to Module-3-Nvidia-Isaac content files
- [X] T034 [P] [US3] Add VLA model examples to Module-4-VLA content files
- [X] T035 [US3] Configure Docusaurus for proper code block syntax highlighting
- [X] T036 [US3] Add admonitions/callouts for "Warnings" and "Notes" in technical content

**Checkpoint**: At this point, User Stories 1, 2 AND 3 should all work independently

---

## Phase 6: User Story 4 - Access Hardware Requirements and Specifications (Priority: P3)

**Goal**: Enable users to access detailed hardware specifications and requirements (NVIDIA RTX 4070+, Jetson Orin Nano)

**Independent Test**: Users can access and understand the hardware requirements to set up their development environment correctly

### Tests for User Story 4 (OPTIONAL - only if tests requested) ⚠️

- [X] T037 [P] [US4] Unit test for hardware comparison table display in tests/unit/test_hardware_table.py
- [X] T038 [P] [US4] Integration test for hardware section accessibility in tests/integration/test_hardware.py

### Implementation for User Story 4

- [X] T039 [P] [US4] Create hardware comparison tables in frontend/docs/Hardware/digital-twin-workstations.md
- [X] T040 [P] [US4] Create hardware comparison tables in frontend/docs/Hardware/edge-kits.md
- [X] T041 [US4] Add NVIDIA RTX 4070+ requirements documentation
- [X] T042 [US4] Add Jetson Orin Nano requirements documentation
- [X] T043 [US4] Create hardware setup guides in frontend/docs/Hardware/setup-guides.md

**Checkpoint**: At this point, User Stories 1, 2, 3 AND 4 should all work independently

---

## Phase 7: RAG Backend Infrastructure

**Goal**: Implement the RAG (Retrieval Augmented Generation) backend with FastAPI, Neon Postgres, and Qdrant Cloud

**Independent Test**: The backend can ingest documents, store embeddings, and respond to queries with context from the book content

### Implementation for RAG Backend

- [X] T044 Setup Neon Postgres connection in backend/src/services/database.py
- [X] T045 Initialize Qdrant Cloud collection for vector embeddings
- [X] T046 [P] Create document parsing service in backend/src/services/document_parser.py
- [X] T047 [P] Create embedding service using OpenAI in backend/src/services/embedding_service.py
- [X] T048 Create ingestion script to process Docusaurus markdown files in backend/scripts/ingest_docs.py
- [X] T049 Implement RAG query service in backend/src/services/rag_service.py
- [X] T050 Create chat service in backend/src/services/chat_service.py
- [X] T051 Implement API endpoints for chat functionality in backend/src/api/chat_router.py
- [X] T052 Implement API endpoint for content ingestion in backend/src/api/ingestion_router.py

---

## Phase 8: Chatbot Frontend Integration

**Goal**: Integrate the RAG chatbot into the Docusaurus frontend with "Selected Text" functionality

**Independent Test**: Users can interact with the chatbot widget, submit queries, and receive responses based on book content; selected text is properly passed as context

### Implementation for Chatbot Frontend

- [X] T053 Create React ChatWidget component in frontend/src/components/ChatWidget/ChatWidget.jsx
- [X] T054 Create ChatMessage subcomponent in frontend/src/components/ChatWidget/ChatMessage.jsx
- [X] T055 Create ChatInput subcomponent in frontend/src/components/ChatWidget/ChatInput.jsx
- [X] T056 Create SelectionHandler utility in frontend/src/components/SelectionHandler/SelectionHandler.js
- [X] T057 Integrate ChatWidget into Docusaurus layout
- [X] T058 Style chat interface to match Docusaurus "Infima" design system
- [X] T059 Add "Ask AI" floating action button to Docusaurus theme

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T060 [P] Update README.md with local setup instructions
- [X] T061 [P] Add comprehensive documentation in docs/
- [X] T062 Conduct "Grounding Test" to ensure AI doesn't answer out-of-scope questions
- [X] T063 Test responsiveness of the UI on mobile and desktop
- [X] T064 [P] Add additional unit tests in tests/unit/
- [X] T065 Security hardening and validation
- [X] T066 Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **RAG Backend (Phase 7)**: Depends on foundational setup, can run in parallel with frontend stories
- **Chatbot Frontend (Phase 8)**: Depends on RAG backend API completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2/US3 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members
- RAG Backend implementation can proceed in parallel with frontend user stories

---

## Implementation Strategy

### MVP First (User Stories 1-4 + Basic RAG)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Core book access)
4. Complete Phase 4: User Story 2 (Navigation)
5. Complete Phase 5: User Story 3 (Technical content)
6. Complete Phase 6: User Story 4 (Hardware specs)
7. Complete Phase 7: RAG Backend
8. Complete Phase 8: Chatbot Frontend
9. **STOP and VALIDATE**: Test all user stories independently
10. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Stories 1-4 → Test independently → Deploy/Demo (MVP!)
3. Add RAG Backend → Test integration → Deploy/Demo
4. Add Chatbot Frontend → Test end-to-end → Deploy/Demo
5. Each increment adds value without breaking previous functionality

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Stories 1 & 2
   - Developer B: User Stories 3 & 4
   - Developer C: RAG Backend Infrastructure
   - Developer D: Chatbot Frontend Integration
3. Stories complete and integrate independently
4. Final integration and polish phase

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence