// import React, { useState } from "react";
// import { Send } from "lucide-react";

// const ChatInput = ({ onSendMessage, disabled }) => {
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!inputValue.trim() || disabled) return;

//     onSendMessage(inputValue);
//     setInputValue("");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex items-center gap-3 p-4 border-t"
//     >
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Ask about Physical AI & Robotics..."
//         disabled={disabled}
//         className="
//           flex-1
//           px-4
//           py-3
//           rounded-xl
//           border
//           border-gray-300
//           bg-white
//           text-gray-900
//           focus:outline-none
//           focus:ring-2
//           focus:ring-blue-500
//           focus:border-transparent
//           text-sm
//           disabled:bg-gray-100
//           disabled:text-gray-400
//           disabled:cursor-not-allowed
//           transition
//           dark:bg-gray-700
//           dark:text-white
//           dark:border-gray-600
//         "
//       />

//       <button
//         type="submit"
//         disabled={disabled || !inputValue.trim()}
//         className="
//           flex
//           items-center
//           justify-center
//           px-4
//           py-3
//           rounded-xl
//           bg-blue-600
//           text-white
//           hover:bg-blue-700
//           active:scale-95
//           disabled:bg-gray-400
//           disabled:cursor-not-allowed
//           transition
//           dark:bg-blue-700
//           dark:hover:bg-blue-800
//         "
//       >
//         <Send size={18} />
//       </button>
//     </form>
//   );
// };

// export default ChatInput;
