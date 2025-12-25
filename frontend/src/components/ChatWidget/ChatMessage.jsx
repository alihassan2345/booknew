import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/default.css';

const ChatMessage = ({ message, role }) => {
  const isUser = role === 'user';

  return (
    <div className={`chat-message ${isUser ? 'user-message' : 'assistant-message'}`}>
      <div className={`message-bubble ${isUser ? 'user' : 'assistant'}`}>
        <ReactMarkdown
          children={message}
          rehypePlugins={[rehypeHighlight]}
          components={{
            // Custom rendering for different elements
            p: ({node, ...props}) => <p {...props} />,
            code: ({node, inline, className, children, ...props}) => {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <pre className={className}>
                  <code {...props}>
                    {children}
                  </code>
                </pre>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        />
      </div>
    </div>
  );
};

export default ChatMessage;