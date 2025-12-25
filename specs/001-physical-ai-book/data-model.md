# Data Model: Physical AI & Humanoid Robotics Book

## Entities

### Book Module
- **ID**: Unique identifier for the module
- **Title**: String, required (e.g., "The Robotic Nervous System")
- **Description**: Text, optional
- **ModuleNumber**: Integer, required (1-4)
- **Pages**: List of Page entities
- **CreatedAt**: DateTime, required
- **UpdatedAt**: DateTime, required

### Page
- **ID**: Unique identifier for the page
- **Title**: String, required
- **Content**: Text, required (Markdown format)
- **ModuleID**: Foreign key to Book Module
- **Order**: Integer, required (for sidebar ordering)
- **Frontmatter**: JSON, optional (Docusaurus metadata)
- **CreatedAt**: DateTime, required
- **UpdatedAt**: DateTime, required

### ChatSession
- **ID**: Unique identifier for the chat session
- **UserID**: String, optional (for anonymous sessions)
- **CreatedAt**: DateTime, required
- **UpdatedAt**: DateTime, required
- **IsActive**: Boolean, required, default: true

### ChatMessage
- **ID**: Unique identifier for the message
- **SessionID**: Foreign key to ChatSession
- **Role**: Enum (user|assistant), required
- **Content**: Text, required
- **Timestamp**: DateTime, required
- **SourceModule**: String, optional (which module content was referenced)
- **SelectedText**: Text, optional (user-highlighted text context)

### DocumentMetadata
- **ID**: Unique identifier for the document
- **Title**: String, required
- **FilePath**: String, required (path in docs directory)
- **ModuleID**: Foreign key to Book Module
- **VectorID**: String, required (ID in Qdrant for embedding reference)
- **CreatedAt**: DateTime, required
- **UpdatedAt**: DateTime, required

### UserSelection
- **ID**: Unique identifier for user selection
- **SessionID**: Foreign key to ChatSession
- **Text**: Text, required (the selected text)
- **Context**: Text, optional (surrounding context)
- **Timestamp**: DateTime, required
- **UsedInQuery**: Boolean, required, default: false