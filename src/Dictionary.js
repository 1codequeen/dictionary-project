import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword || "");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleDictionaryResponse);

    let pexelsApiKey = "zlFfF21K6xmtj9PA6bafzt2E0E8ByPM9eZzIgZQykjYUGxRgSJmzCbOS";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: pexelsApiKey };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  }else {
    Load();
    return "Loading...";
  }
}
