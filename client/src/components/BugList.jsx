import React from "react";
import axios from "axios";

const BugList = ({ bugs, refresh }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/bugs/${id}`);
    refresh();
  };

  const handleStatusChange = async (id, status) => {
    await axios.put(`http://localhost:5000/api/bugs/${id}`, { status });
    refresh();
  };

  return (
    <div>
      {bugs.length === 0 ? (
        <p>No bugs reported.</p>
      ) : (
        <ul>
          {bugs.map((bug) => (
            <li key={bug._id}>
              <h3>{bug.title}</h3>
              <p>{bug.description}</p>
              <p>Status: {bug.status}</p>
              <button onClick={() => handleStatusChange(bug._id, "in-progress")}>In Progress</button>
              <button onClick={() => handleStatusChange(bug._id, "resolved")}>Resolve</button>
              <button onClick={() => handleDelete(bug._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BugList;
