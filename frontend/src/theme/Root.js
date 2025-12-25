import React from 'react';
import ChatWidget from '../components/ChatWidget/ChatWidget';

// Default implementation, that you can customize
function Root({ children }) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}

export default Root;