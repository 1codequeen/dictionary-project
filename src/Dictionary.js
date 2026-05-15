import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results,setResults]=useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(url).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Enter a word..."
            onChange={handleKeywordChange}
        />

        <button type="submit">Search</button>
      </form>
      </section>
      <Results results={results} />
    </div>
  );
}

