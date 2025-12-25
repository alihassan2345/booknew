// import React, { useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import rehypeHighlight from 'rehype-highlight';
// import { Copy, Check } from 'lucide-react';
// import 'highlight.js/styles/default.css';

// const ChatMessage = ({ message, role, timestamp }) => {
//   const isUser = role === 'user';
//   const avatarChar = isUser ? '👤' : '🤖';
//   const roleName = isUser ? 'You' : 'AI Assistant';
//   const [copied, setCopied] = useState(false);

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(message);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error('Failed to copy text: ', err);
//     }
//   };

//   return (
//     <div className={`chat-message ${isUser ? 'user-message' : 'assistant-message'}`}>
//       <div className="message-content">
//         <div className={`message-avatar ${isUser ? 'user-avatar' : 'assistant-avatar'}`} title={roleName}>
//           {avatarChar}
//         </div>
//         <div className={`message-bubble ${isUser ? 'user' : 'assistant'}`}>
//           <div className="message-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
//             <div className="message-role" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>
//               {roleName}
//             </div>
//             {timestamp && (
//               <div className="message-timestamp" style={{ fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-600)', marginLeft: '8px' }}>
//                 {timestamp}
//               </div>
//             )}
//           </div>
//           <ReactMarkdown
//             children={message}
//             rehypePlugins={[rehypeHighlight]}
//             components={{
//               // Custom rendering for different elements
//               p: ({node, ...props}) => <p {...props} />,
//               code: ({node, inline, className, children, ...props}) => {
//                 const match = /language-(\w+)/.exec(className || '');
//                 return !inline && match ? (
//                   <pre className={className}>
//                     <code {...props}>
//                       {children}
//                     </code>
//                   </pre>
//                 ) : (
//                   <code className={className} {...props}>
//                     {children}
//                   </code>
//                 );
//               }
//             }}
//           />
//           <div className="message-actions" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
//             <button
//               onClick={handleCopy}
//               className="copy-button"
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 cursor: 'pointer',
//                 padding: '4px',
//                 borderRadius: '4px',
//                 fontSize: '0.8rem',
//                 color: 'var(--ifm-color-emphasis-600)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '4px'
//               }}
//               title="Copy message"
//             >
//               {copied ? <Check size={14} /> : <Copy size={14} />}
//               {copied ? 'Copied!' : 'Copy'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;