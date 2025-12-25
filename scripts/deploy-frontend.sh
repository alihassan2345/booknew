#!/bin/bash

# Deployment script for frontend to GitHub Pages

echo "Building frontend for deployment..."

cd frontend

# Build the static site
npm run build

echo "Build complete!"
echo "To deploy, run: npm run deploy"