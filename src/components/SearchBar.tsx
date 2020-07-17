import React, { useState } from "react";

export type SearchBarProps = {
    onSearch(city: string): any,
}

export default function SearchBar({onSearch}: SearchBarProps) {
  const [city, setCity] = useState("");
  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        className="form-control mr-sm-2" 
        type="search"
        placeholder="Find your city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button className="btn btn-outline-info my-2 my-sm-0 " type="submit">Search</button>
    </form>
  );
}
