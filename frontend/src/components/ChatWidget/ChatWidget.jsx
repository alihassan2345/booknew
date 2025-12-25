import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SelectionHandler from '../SelectionHandler/SelectionHandler';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const selectionHandler = new SelectionHandler();

  // Initialize chat session
  useEffect(() => {
    // Initialize selection handler
    selectionHandler.init(handleSelectedText);

    // Start a new chat session
    startNewSession();
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const startNewSession = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/chat/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      setSessionId(data.session_id);
    } catch (error) {
      console.error('Error starting chat session:', error);
    }
  };

  const handleSelectedText = (selectedText) => {
    // Add the selected text as a message and prompt user to ask about it
    setMessages(prev => [
      ...prev,
      { role: 'user', content: `About this text: "${selectedText}"`, isContext: true }
    ]);

    // Optionally auto-focus the input to encourage the user to ask a question
    // This could be implemented in the ChatInput component
  };

  const handleSendMessage = async (message) => {
    if (!sessionId) return;

    // Add user message to UI immediately
    const userMessage = { role: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Send message to backend
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/chat/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          query: message,
          selected_text: selectionHandler.getSelectedText() // Include any selected text as context
        }),
      });

      const data = await response.json();

      // Add AI response to UI
      const aiMessage = { role: 'assistant', content: data.response, sources: data.sources };
      setMessages(prev => [...prev, aiMessage]);

      // Clear the selected text after sending
      selectionHandler.clearSelection();
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-widget">
      {isOpen ? (
        <div className="chat-container">
          <div className="chat-header">
            <h3>Physical AI Assistant</h3>
            <button className="chat-close-button" onClick={toggleChat}>
              ×
            </button>
          </div>
          <div className="chat-messages">
            {messages.length === 0 ? (
              <div className="chat-welcome-message">
                <p>Hello! I'm your Physical AI assistant. Ask me about the content in this book.</p>
                <p>You can select text on the page and click "Ask AI about this" to get more specific answers.</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  message={msg.content}
                  role={msg.role}
                  sources={msg.sources}
                />
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input-container">
            <ChatInput
              onSendMessage={handleSendMessage}
              disabled={isLoading || !sessionId}
            />
          </div>
        </div>
      ) : (
        <button className="chatbot-button" onClick={toggleChat}>
          🤖
        </button>
      )}
    </div>
  );
};

export default ChatWidget;