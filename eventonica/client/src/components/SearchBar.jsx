import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  // if (searchInput.length > 0) {
  //   eventname.filter((event) => {
  //     return event.eventname.match(serachInput);
  //   })
  // }


  return (
    <div className="search-container">
      <p id="search" >Search For Event</p>
      <input
        type="text"
        id="search-bar"
        placeholder="Search Here"
        onChange={handleChange}
        // value={searchInput}
      />
    </div>
  )
}

export default SearchBar;