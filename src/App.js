import { useState } from "react";
import "./App.css";
import ListCountries from "./components/ListCountries";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          value={searchValue}
          placeholder="Search for countries"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <ListCountries searchValue={searchValue} />
    </div>
  );
}

export default App;
