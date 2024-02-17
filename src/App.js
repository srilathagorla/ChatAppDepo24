// src/App.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatWindow from './components/ChatWindow';
import InputField from './components/InputField';
import UserList from './components/UserList'; 
import './App.css'


const socket = io('http://localhost:5000'); // Replace with your backend URL

function App() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Set up event listener for receiving messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Set up event listener for receiving user list
    socket.on('userList', (userList) => {
      setUsers(userList);
    });

    // Clean up on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit('sendMessage', message);
  };

  return (
    <div>
      <ChatWindow messages={messages} />
      <InputField sendMessage={sendMessage} />
      <UserList users={users} />
    </div>
  );
}

export default App;