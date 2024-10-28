import React, { useRef } from "react";
import { gsap } from "gsap";

const CreateButton = () => {
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
        <svg
          width='25'
          height='25'
          viewBox='0 0 25 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g clipPath='url(#clip0_0_41)'>
            <g clipPath='url(#clip1_0_41)'>
              <path
                d='M22.0482 12.5C22.0482 7.07757 17.6524 2.68182 12.23 2.68182C6.80755 2.68182 2.4118 7.07757 2.4118 12.5C2.4118 17.9224 6.80755 22.3182 12.23 22.3182C17.6524 22.3182 22.0482 17.9224 22.0482 12.5Z'
                fill='#4F55F1'
              />
              <path
                d='M12.23 16.5909V8.40909'
                stroke='white'
                strokeWidth='1.63636'
                strokeLinecap='round'
              />
              <path
                d='M8.13907 12.5H16.3209'
                stroke='white'
                strokeWidth='1.63636'
                strokeLinecap='round'
              />
            </g>
          </g>
          <defs>
            <clipPath id='clip0_0_41'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(0.22998 0.5)'
              />
            </clipPath>
            <clipPath id='clip1_0_41'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(0.22998 0.5)'
              />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span className="text">Create</span>
    </button>
  );
};

export default CreateButton;
