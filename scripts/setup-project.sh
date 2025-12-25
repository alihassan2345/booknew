#!/bin/bash

# Setup script for Physical AI Book & RAG Chatbot project

echo "Setting up Physical AI Book & RAG Chatbot project..."

# Setup frontend
echo "Setting up frontend..."
cd frontend
npm install
cd ..

# Setup backend
echo "Setting up backend..."
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cd ..

echo "Setup complete!"
echo ""
echo "To start the frontend: cd frontend && npm start"
echo "To start the backend: cd backend && source venv/bin/activate && python main.py"