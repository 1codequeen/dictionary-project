import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword || "");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function Load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a word..."
              onChange={handleKeywordChange}
            />
            <button type="submit">Search</button>
          </form>
          <div className="hint">
            Suggested words: sunset, wine, yoga, forest...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  }else {
    Load();
    return "Loading...";
  }
}
