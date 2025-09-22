import React from "react";

function SearchBox({ searchQuery, setSearchQuery }) {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <input
        className="px-2 py-0.5 bg-gray-600 rounded-xl"
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search..."
      />
    </>
  );
}

export default SearchBox;
