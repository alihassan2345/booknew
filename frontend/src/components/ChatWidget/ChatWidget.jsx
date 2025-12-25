import React, { useState, useRef, useEffect } from 'react';
import "../../css/chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const messagesEndRef = useRef(null);
  const chatbotRef = useRef(null);

  // Function to scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to get selected text
  useEffect(() => {
    const handleSelection = () => {
      const selectedText = window.getSelection().toString().trim();
      setSelectedText(selectedText);
    };

    document.addEventListener('mouseup', handleSelection);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);

  // Function to send message to backend
  const sendMessage = async (message, isSelectionQuery = false) => {
    if (!message.trim() || isLoading) return;

    // Add user message to chat
    const userMessage = { type: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      let response;
      if (isSelectionQuery && selectedText) {
        // Send to /chat/selected endpoint
        response = await fetch('http://localhost:8000/chat/selected', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question: message,
            selected_text: selectedText
          })
        });
      } else {
        // Send to /chat endpoint
        response = await fetch('http://localhost:8000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question: message
          })
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add bot response to chat
      const botMessage = {
        type: 'bot',
        content: data.response,
        sources: data.sources || []
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleAskAboutSelection = () => {
    if (!selectedText) {
      alert('Please select some text first');
      return;
    }
    sendMessage(`About the selected text: "${selectedText.substring(0, 200)}${selectedText.length > 200 ? '...' : ''}"`, true);
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot button to open/close */}
      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        title="Open Chatbot"
      >
        💬
      </button>

      {/* Chatbot panel */}
      {isOpen && (
        <div className="chatbot-panel" ref={chatbotRef}>
          <div className="chatbot-header">
            <h3>Book Assistant</h3>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 ? (
              <div className="chatbot-welcome">
                <p>Hello! I'm your book assistant. Ask me anything about the content in this book.</p>
                {selectedText && (
                  <button
                    className="ask-about-selection-btn"
                    onClick={handleAskAboutSelection}
                  >
                    Ask about selected text: "{selectedText.substring(0, 50)}..."
                  </button>
                )}
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.type}`}
                >
                  <div className="message-content">
                    {msg.content}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="message-sources">
                        <small>Sources: {msg.sources.slice(0, 3).join(', ')}</small>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {selectedText && messages.length > 0 && (
            <div className="selected-text-notice">
              <button
                className="ask-about-selection-btn"
                onClick={handleAskAboutSelection}
              >
                Ask about selected text: "{selectedText.substring(0, 50)}..."
              </button>
            </div>
          )}

          <form className="chatbot-input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question about the book..."
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;