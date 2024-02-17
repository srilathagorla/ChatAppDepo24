// src/components/UserList.js
import React from 'react';

const UserList = ({ users }) => (
  <div>
    <h2>Active Users</h2>
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  </div>
);

export default UserList;