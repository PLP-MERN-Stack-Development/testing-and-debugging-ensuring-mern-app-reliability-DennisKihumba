import React, { useState } from "react";
import axios from "axios";

const BugForm = ({ refresh }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bugs", formData);
      setFormData({ title: "", description: "" });
      refresh();
    } catch (err) {
      console.error("Error creating bug:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Bug title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Add Bug</button>
    </form>
  );
};

export default BugForm;
