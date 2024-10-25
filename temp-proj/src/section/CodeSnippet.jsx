// CodeSnippet.jsx
import React from 'react';

const CodeSnippet = ({ code, styleClass, width = 'w-full', height = 'h-auto'  }) => (
  <pre
    className={`relative bg-black bg-opacity-80 rounded-lg p-4 border-4 border-transparent transition-all duration-300 ${styleClass} ${width} ${height} overflow-auto`}
    style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }} 
  >
    <code>{code}</code>
  </pre>
);

export default CodeSnippet;
