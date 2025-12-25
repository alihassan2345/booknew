import React, { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      // Check if the clicked element or its parent is an anchor link
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;