<!--
Sync Impact Report:
- Version change: N/A → 1.0.0 (initial version)
- Added sections: All principles based on user requirements (Spec-Driven Consistency, Modularity, Contextual Grounding, Performance, Security and Infrastructure Constraints, Tooling and Environment Compatibility)
- Added sections: Key Standards, Functional Requirements, Governance rules
- Templates requiring updates: ✅ plan-template.md (has Constitution Check section), ✅ spec-template.md (aligns with functional requirements), ✅ tasks-template.md (aligns with user story approach)
- Follow-up TODOs: RATIFICATION_DATE needs to be set
-->
# Unified AI-Native Book & Integrated RAG Chatbot Constitution


## Core Principles

### Spec-Driven Consistency
All development must strictly adhere to specifications generated via Spec-Kit Plus.

### Modularity
Separation of concerns between the Docusaurus frontend, FastAPI backend, and Vector DB.

### Contextual Grounding
The chatbot must strictly prioritize the book's content and user-selected text to prevent hallucinations.

### Performance
Optimized embedding retrieval and fast UI response times for a seamless reading experience.

### Security and Infrastructure Constraints
Strict use of `.env` files for OpenAI, Neon, and Qdrant credentials; zero-exposure policy for secrets; use only Free Tier services for Neon and Qdrant Cloud.

### Tooling and Environment Compatibility
Development must be performed using Claude Code and Spec-Kit Plus; must be compatible with GitHub Actions for deployment.


## Key Standards
- Frontend Framework: Docusaurus (latest stable version)
- Backend Stack: FastAPI with OpenAI Agents SDK
- Database Architecture: Neon Serverless Postgres (Relational) and Qdrant Cloud (Vector Store)
- CI/CD: Automated deployment of the book to GitHub Pages
- API Design: RESTful endpoints for the chatbot communication


## Functional Requirements
- Book Generation: Content must be structured, readable, and properly indexed for RAG
- RAG Implementation: Automated ingestion pipeline to sync Docusaurus Markdown files into Qdrant Cloud
- User-Selection Logic: Chatbot must accept and process "selected-text" as a primary context window when provided by the user
- UI Integration: The chatbot widget must be natively integrated into the Docusaurus theme/layout


## Governance
- All development must follow Spec-Kit Plus project structure
- Strict adherence to security requirements with proper environment variable handling
- Code must pass linting and meet quality standards
- All changes must reference code precisely and be testable

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date unknown | **Last Amended**: 2025-12-24