import React, { useState } from "react";
import  "./SearchBar.css"

export type SearchBarProps = {
    onSearch(city: string): any,
}

export default function SearchBar({onSearch}: SearchBarProps) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        className="input"
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="addButton" type="submit" value="Search" />
    </form>
  );
}
