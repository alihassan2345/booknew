# Quickstart Guide: Physical AI & Humanoid Robotics Book

## Prerequisites

- Node.js v18+ (for Docusaurus frontend)
- Python 3.11+ (for FastAPI backend)
- Git
- Docker (optional, for containerized deployment)
- OpenAI API key
- Neon Postgres account
- Qdrant Cloud account

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd physical-ai-book
```

### 2. Frontend Setup (Docusaurus)
```bash
# Navigate to frontend directory
cd frontend  # or wherever Docusaurus is located

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update .env with your configuration
# (Currently just for local development)

# Start development server
npm start
```

### 3. Backend Setup (FastAPI)
```bash
# Navigate to backend directory
cd backend  # or wherever FastAPI is located

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
cp .env.example .env

# Update .env with your credentials:
# OPENAI_API_KEY=your_openai_api_key
# NEON_DATABASE_URL=your_neon_connection_string
# QDRANT_URL=your_qdrant_cluster_url
# QDRANT_API_KEY=your_qdrant_api_key

# Start the backend server
uvicorn main:app --reload --port 8000
```

### 4. Initialize Database and Vector Store

#### Initialize Neon Postgres:
```bash
# Run database migrations
cd backend
python -m alembic upgrade head
```

#### Initialize Qdrant Collection:
```bash
# Create the collection for embeddings
cd backend
python scripts/init_qdrant.py
```

### 5. Content Ingestion
```bash
# Ingest Docusaurus markdown files into vector store
cd backend
python scripts/ingest_docs.py --source-path ../docs
```

### 6. Running the Application
```bash
# Terminal 1: Start the backend
cd backend
uvicorn main:app --reload --port 8000

# Terminal 2: Start the frontend
cd frontend
npm start
```

## API Usage

### Start a Chat Session
```bash
curl -X POST http://localhost:8000/api/chat/start \
  -H "Content-Type: application/json"
```

### Send a Query to the Chatbot
```bash
curl -X POST http://localhost:8000/api/chat/query \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "session-id-from-start",
    "query": "What is ROS 2?",
    "selected_text": "Optional selected text to prioritize as context"
  }'
```

## Environment Variables

### Backend (.env)
```bash
OPENAI_API_KEY=your_openai_api_key
NEON_DATABASE_URL=postgresql://username:password@ep-xxxx.us-east-1.aws.neon.tech/dbname?sslmode=require
QDRANT_URL=https://your-cluster-url.qdrant.tech
QDRANT_API_KEY=your_qdrant_api_key
```

### Frontend (.env)
```bash
REACT_APP_API_BASE_URL=http://localhost:8000
```

## Deployment

### Frontend to GitHub Pages
```bash
# Build the static site
npm run build

# Deploy using Docusaurus command
npm run deploy
```

### Backend to Cloud Platform
Follow your cloud platform's instructions for deploying FastAPI applications, ensuring environment variables are properly configured.

## Troubleshooting

1. **Database Connection Issues**: Verify NEON_DATABASE_URL is correct and the database is accessible.
2. **Vector Store Issues**: Ensure QDRANT_URL and QDRANT_API_KEY are properly set.
3. **API Rate Limits**: Check OpenAI usage and upgrade if needed.
4. **Content Not Found**: Verify that docs have been properly ingested using the ingestion script.