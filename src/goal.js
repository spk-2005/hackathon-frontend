import React, { useEffect, useState } from "react";
import "./goal.css";

export default function Goal() {
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const baseId = "appfQNmAs6vTN5iAn"; // Replace with your Airtable Base ID
      const tableName = "userinputs"; // Replace with your Airtable Table Name
      const apiKey = "pataRZ3DHSFEkG4y5.990679aa58294bb7876ba2b2450d1c3b79ef7c49cf4754557f69d0e5e07e2061"; // Replace with your Airtable API Key
      const name = sessionStorage.getItem("usname"); // Retrieve the name from localStorage

      try {
        if (!name) {
          console.error("Name not found in localStorage");
          setGoal("Please log in to view your goal.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://api.airtable.com/v0/${baseId}/${tableName}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          // Filter records to find the one that matches the name
          const userRecord = data.records.find(
            (record) => record.fields.Name === name
          );
          const userGoal = userRecord?.fields?.goal || "No goal found for this name.";
          setGoal(userGoal);
        } else {
          console.error("Failed to fetch data from Airtable");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      localStorage.removeItem("usname");
    };
  }, []);

  return (
    <>
      <section id="usergoal" style={{ textAlign: "center", padding: "20px" }}>
        {loading ? (
          <p>Loading your goal...</p>
        ) : (
          <>
            <h1>Your Goal</h1>
            <p>{goal}</p>
            <h2>Stay Motivated!</h2>
            <p>
              Remember, every small step you take brings you closer to your
              dream. Keep going and never give up!
            </p>
          </>
        )}
      </section>
    </>
  );
}
