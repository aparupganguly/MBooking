import React, { useRef } from "react";
import { gsap } from "gsap";
import SeachIcon from "../../Assets/NavBar/searchIcon.png";

const SearchBar = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(inputRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
    });
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(inputRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <div className='search-bar'>
      <span className='search-icon'>
        <img src={SeachIcon} alt='' className='SeachIcon' />
      </span>
      <input
        type='text'
        className='search-input'
        placeholder='Search...'
        ref={inputRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <button
        className='search-button'
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
