import React from 'react';
import ChatWidget from '../components/ChatWidget/ChatWidget';
import { ThemeProvider } from '../contexts/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

// Default implementation, that you can customize
function Root({ children }) {
  return (
    <ThemeProvider>
      <>
        {children}
        <ThemeToggle />
        <ChatWidget />
      </>
    </ThemeProvider>
  );
}

export default Root;