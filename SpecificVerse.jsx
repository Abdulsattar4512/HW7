import React, { useState } from "react";

const SpecificVerse = () => {
  const [reference, setReference] = useState("John 3:16");
  const [verse, setVerse] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSpecificVerse = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://labs.bible.org/api_web_service?method=getVerse&reference=${reference}&format=json`);
      const data = await response.json();
      setVerse(data[0].text);
    } catch (error) {
      console.error("Error fetching verse:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
        placeholder="Enter a verse reference (e.g., John 3:16)"
      />
      <button onClick={fetchSpecificVerse} disabled={loading}>
        {loading ? "Loading..." : "Get Verse"}
      </button>
      {verse && <p>{verse}</p>}
    </div>
  );
};

export default SpecificVerse;
