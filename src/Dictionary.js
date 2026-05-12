import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value); 
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();

let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(url).then(handleResponse);

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
