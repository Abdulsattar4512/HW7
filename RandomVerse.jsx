import React, { useState } from "react";

const RandomVerse = () => {
  const [verse, setVerse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRandomVerse = async () => {
    setLoading(true);
    setError("");  // Clear previous errors
    try {
      // Using the 'random' passage parameter to get a random verse
      const response = await fetch("https://labs.bible.org/api/?passage=random&formatting=plain&type=json");
      const data = await response.json();
      console.log("API Response:", data);  // Log the API response for debugging

      if (data && data[0] && data[0].text) {
        setVerse(data[0].text);  // Display the verse text
      } else {
        setError("Verse not found");
      }
    } catch (error) {
      console.error("Error:", error);  // Log any error
      setError("Error fetching verse");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchRandomVerse} disabled={loading}>
        {loading ? "Loading..." : "Get Random Verse"}
      </button>
      {error && <p>{error}</p>}
      {verse && <p>{verse}</p>}
    </div>
  );
};

export default RandomVerse;
