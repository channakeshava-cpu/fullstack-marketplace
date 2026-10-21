
import { useState } from "react";
import { apiRequest } from "./api/client";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function testConnection() {
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const data = await apiRequest("/api/test");
      setMessage(data.message);
    } catch (err) {
      setError(err.message || "Could not connect to the backend");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>E-Commerce Marketplace</h1>
      <p>Frontend: React + Vite</p>
      <p>Backend: Spring Boot</p>

      <button onClick={testConnection} disabled={loading}>
        {loading ? "Testing..." : "Test Backend Connection"}
      </button>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </main>
  );
}

export default App;
