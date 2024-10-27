import React from "react";
import SeachIcon from "../../Assets/NavBar/searchIcon.png";
const SearchBar = () => {
  return (
    <div className='search-bar'>
      <span className='search-icon'>
        <img src={SeachIcon} alt='' className='SeachIcon' />
      </span>
      <input type='text' className='search-input' placeholder='Search...' />
      <button className='search-button'>Search</button>
    </div>
  );
};

export default SearchBar;
