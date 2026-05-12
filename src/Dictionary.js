import { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for "${keyword}" definition...`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="text"
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
