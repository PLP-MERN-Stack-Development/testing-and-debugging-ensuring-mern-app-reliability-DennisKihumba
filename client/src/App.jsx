import React, { useState, useEffect } from "react";
import axios from "axios";
import BugForm from "./components/BugForm";
import BugList from "./components/BugList";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBugs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bugs");
      setBugs(res.data);
    } catch (err) {
      console.error("Error fetching bugs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <h1>🐞 MERN Bug Tracker</h1>
        <BugForm refresh={fetchBugs} />
        {loading ? <p>Loading...</p> : <BugList bugs={bugs} refresh={fetchBugs} />}
      </div>
    </ErrorBoundary>
  );
};

export default App;
