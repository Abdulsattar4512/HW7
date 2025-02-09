import React, { useState } from "react";

const RandomVerse = () => {
  const [verse, setVerse] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRandomVerse = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://labs.bible.org/api_web_service?method=getRandomVerse&format=json");
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
      <button onClick={fetchRandomVerse} disabled={loading}>
        {loading ? "Loading..." : "Get Random Verse"}
      </button>
      {verse && <p>{verse}</p>}
    </div>
  );
};

export default RandomVerse;
