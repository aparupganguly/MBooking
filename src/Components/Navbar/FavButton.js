import React, { useRef } from "react";
import { gsap } from "gsap";

const FavoritesButton = () => {
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(iconRef.current, {
      scale: 1.2,
      rotate: 10,
      duration: 0.3,
      ease: "power3.out",
      yoyo: true,
      repeat: 1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: "transparent",
      duration: 0.3,
      ease: "power3.out",
      boxShadow: "none",
    });

    gsap.to(iconRef.current, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <button
      className="favorites-button"
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="icon" ref={iconRef}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_0_56)">
            <g clipPath="url(#clip1_0_56)">
              <path fillRule="evenodd" clipule="evenodd" d="M3.57996 10.5298C3.57996 7.8293 5.9491 5.75 8.72996 5.75C10.1634 5.75 11.4248 6.42214 12.33 7.29183C13.2352 6.42214 14.4965 5.75 15.93 5.75C18.7109 5.75 21.08 7.8293 21.08 10.5298C21.08 12.3797 20.2911 14.0064 19.1982 15.3815C18.1071 16.7543 16.68 17.9193 15.3135 18.866C14.7915 19.2276 14.2635 19.5611 13.7803 19.8072C13.3265 20.0383 12.8047 20.25 12.33 20.25C11.8553 20.25 11.3335 20.0383 10.8797 19.8072C10.3965 19.5611 9.86842 19.2276 9.34649 18.866C7.98001 17.9193 6.55283 16.7543 5.46178 15.3815C4.36884 14.0064 3.57996 12.3797 3.57996 10.5298ZM8.72996 7.25C6.65071 7.25 5.07996 8.7791 5.07996 10.5298C5.07996 11.9333 5.67575 13.24 6.63605 14.4482C7.59824 15.6588 8.89288 16.7269 10.2007 17.633C10.6956 17.9758 11.1617 18.2675 11.5605 18.4706C11.9886 18.6886 12.2367 18.75 12.33 18.75C12.4233 18.75 12.6714 18.6886 13.0995 18.4706C13.4983 18.2675 13.9644 17.9758 14.4593 17.633C15.7671 16.7269 17.0617 15.6588 18.0239 14.4482C18.9842 13.24 19.58 11.9333 19.58 10.5298C19.58 8.7791 18.0092 7.25 15.93 7.25C14.7358 7.25 13.6208 7.96342 12.9246 8.86892C12.7826 9.05356 12.5629 9.16176 12.33 9.16176C12.0971 9.16176 11.8774 9.05356 11.7354 8.86892C11.0392 7.96342 9.92411 7.25 8.72996 7.25Z" fill="#4F55F1" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_0_56">
              <rect width="24" height="24" fill="white" transform="translate(0.329956 0.5)" />
            </clipPath>
            <clipPath id="clip1_0_56">
              <rect width="24" height="24" fill="white" transform="translate(0.329956 0.5)" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span className="text">Favorites</span>
    </button>
  );
};

export default FavoritesButton;
