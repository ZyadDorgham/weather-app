import { useState } from "react";

export default function SearchBar({ onSearch }) {

  let [input, setInput] = useState("");

  function handleSearch() {
    if (input.trim() !== "") {
      onSearch(input);
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}