// src/components/ChatWindow.js
import React from 'react';

const ChatWindow = ({ messages }) => (
  <div>
    {messages.map((message, index) => (
      <p key={index}>{message}</p>
    ))}
  </div>
);

export default ChatWindow;