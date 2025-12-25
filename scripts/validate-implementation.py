#!/usr/bin/env python3
"""
Validation script for the Physical AI Book & RAG Chatbot implementation.
"""

import os
import sys
from pathlib import Path

def validate_frontend_structure():
    """Validate the frontend directory structure."""
    frontend_dir = Path("frontend")

    required_dirs = [
        "docs/Module-1-ROS2",
        "docs/Module-2-Simulation",
        "docs/Module-3-Nvidia-Isaac",
        "docs/Module-4-VLA",
        "docs/Hardware",
        "docs/Curriculum",
        "src/components/ChatWidget",
        "src/components/SelectionHandler",
        "src/css"
    ]

    missing_dirs = []
    for dir_path in required_dirs:
        if not (frontend_dir / dir_path).exists():
            missing_dirs.append(dir_path)

    if missing_dirs:
        print(f"Missing frontend directories: {missing_dirs}")
        return False
    else:
        print("Frontend directory structure is complete")
        return True

def validate_backend_structure():
    """Validate the backend directory structure."""
    backend_dir = Path("backend")

    required_dirs = [
        "src/models",
        "src/services",
        "src/api",
        "scripts",
        "tests/unit",
        "tests/integration"
    ]

    missing_dirs = []
    for dir_path in required_dirs:
        if not (backend_dir / dir_path).exists():
            missing_dirs.append(dir_path)

    if missing_dirs:
        print(f"Missing backend directories: {missing_dirs}")
        return False
    else:
        print("Backend directory structure is complete")
        return True

def validate_required_files():
    """Validate required files exist."""
    required_files = [
        "frontend/package.json",
        "frontend/docusaurus.config.js",
        "frontend/sidebars.js",
        "frontend/docs/intro.md",
        "backend/requirements.txt",
        "backend/main.py",
        "backend/src/api/main.py",
        "backend/src/models/chat_session.py",
        "backend/src/models/chat_message.py",
        "backend/src/services/rag_service.py",
        "backend/src/services/chat_service.py",
        "README.md",
        ".gitignore"
    ]

    missing_files = []
    for file_path in required_files:
        if not Path(file_path).exists():
            missing_files.append(file_path)

    if missing_files:
        print(f"Missing required files: {missing_files}")
        return False
    else:
        print("All required files are present")
        return True

def validate_content_files():
    """Validate that content files exist for each module."""
    content_files = [
        "frontend/docs/Module-1-ROS2/ros2-node-example.md",
        "frontend/docs/Module-2-Simulation/gazebo-simulation-example.md",
        "frontend/docs/Module-3-Nvidia-Isaac/isaac-sim-example.md",
        "frontend/docs/Module-4-VLA/vla-model-example.md",
        "frontend/docs/Hardware/digital-twin-workstations.md",
        "frontend/docs/Hardware/edge-kits.md",
        "frontend/docs/Hardware/setup-guides.md"
    ]

    missing_content = []
    for file_path in content_files:
        if not Path(file_path).exists():
            missing_content.append(file_path)

    if missing_content:
        print(f"Missing content files: {missing_content}")
        return False
    else:
        print("All content files are present")
        return True

def main():
    print("Validating Physical AI Book & RAG Chatbot Implementation...")
    print()

    all_passed = True

    all_passed &= validate_frontend_structure()
    all_passed &= validate_backend_structure()
    all_passed &= validate_required_files()
    all_passed &= validate_content_files()

    print()
    if all_passed:
        print("All validations passed! Implementation is complete.")
        return 0
    else:
        print("Some validations failed. Please check the implementation.")
        return 1

if __name__ == "__main__":
    sys.exit(main())