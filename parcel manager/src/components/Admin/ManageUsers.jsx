import React from 'react';

const UsersList = () => {
  // Placeholder data; replace with actual data fetching logic
  const users = [
    { id: 1, username: 'admin', role: 'Administrator' },
    { id: 2, username: 'john_doe', role: 'User' },
    { id: 3, username: 'jane_smith', role: 'User' },
  ];

  return (
    <div className="users-list">
      <h2 className="section-title">All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
