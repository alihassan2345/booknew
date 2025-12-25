import React, { useState } from 'react';

const ChatInput = ({ onSendMessage, disabled }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !disabled) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ask about the Physical AI content..."
        disabled={disabled}
      />
      <button
        type="submit"
        className="chat-send-button"
        disabled={disabled || !inputValue.trim()}
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;