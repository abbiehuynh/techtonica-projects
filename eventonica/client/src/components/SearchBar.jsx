import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-container">
      <p id="search" >Search For Event</p>
      <input
        type="text"
        id="search-bar"
        placeholder="Search Here"
        required
        // value={}
        // onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar;