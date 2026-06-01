"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/status`,
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Frontend - Next.js</h1>
      <div style={{ marginTop: "2rem" }}>
        <h2>Backend Status:</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data && (
          <div
            style={{
              background: "#f0f0f0",
              padding: "1rem",
              borderRadius: "4px",
            }}
          >
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
      <hr style={{ margin: "2rem 0" }} />
      <p>Backend URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}
