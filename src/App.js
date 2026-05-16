import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Welcome to the Dictionary App</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer>Coded by Queen Yona</footer>
      </div>
    </div>
  );
}
