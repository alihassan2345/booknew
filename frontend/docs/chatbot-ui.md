---
sidebar_position: 98
---

# Chatbot UI Features

This document describes the features and functionality of the enhanced chatbot UI.

## Theme Support

The chatbot UI supports both light and dark themes with automatic detection of system preferences:

- **Automatic Detection**: The UI detects your system's dark/light mode preference
- **Manual Toggle**: Use the theme toggle button (top-right corner) to switch themes
- **Persistence**: Your theme preference is saved in local storage

## Character Representation

The chat interface includes visual character representation:

- **User Avatar**: 👤 for user messages
- **AI Assistant Avatar**: 🤖 for AI responses
- **Role Labels**: Clear "You" and "AI Assistant" labels
- **Distinct Styling**: Different colors and styling for user vs AI messages

## Advanced Features

### Timestamps
- Each message displays the time it was sent/received
- Format: HH:MM (e.g., 14:30)

### Copy Functionality
- Each message has a "Copy" button
- Click to copy the message text to clipboard
- Visual feedback when text is copied

### Clear Chat
- Clear chat button in the header (🗑️ icon)
- Clears all messages and starts a new session
- Preserves your conversation context

### Typing Indicators
- Animated dots appear when the AI is "thinking"
- Provides visual feedback during response generation

## Accessibility Features

- **ARIA Labels**: All interactive elements have proper labels
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: High contrast for readability in both themes
- **Focus Indicators**: Clear focus states for keyboard users

## Responsive Design

The chat interface is fully responsive:
- Works on mobile, tablet, and desktop
- Adapts layout based on screen size
- Touch-friendly controls