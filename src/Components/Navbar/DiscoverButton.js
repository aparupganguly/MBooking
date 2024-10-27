import React from "react";

const DiscoverButton = () => {
  return (
    <button className="favorites-button">
      <span className="icon">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_0_49)">
            <g clip-path="url(#clip1_0_49)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.42 5.25C8.41592 5.25 5.16998 8.49594 5.16998 12.5C5.16998 16.5041 8.41592 19.75 12.42 19.75C16.4241 19.75 19.67 16.5041 19.67 12.5C19.67 8.49594 16.4241 5.25 12.42 5.25ZM3.66998 12.5C3.66998 7.66751 7.58749 3.75 12.42 3.75C17.2525 3.75 21.17 7.66751 21.17 12.5C21.17 17.3325 17.2525 21.25 12.42 21.25C7.58749 21.25 3.66998 17.3325 3.66998 12.5Z" fill="#4F55F1" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2698 9.80875C10.3362 10.5768 9.71252 11.6571 9.51416 12.8496L9.07622 15.4824C8.8488 16.8496 10.4386 17.7675 11.5089 16.8869L13.57 15.1912C14.5036 14.4232 15.1273 13.3429 15.3256 12.1504L15.7636 9.51756C15.991 8.15035 14.4013 7.23251 13.3309 8.11307L11.2698 9.80875ZM12.42 11C11.5916 11 10.92 11.6716 10.92 12.5C10.92 13.3284 11.5916 14 12.42 14C13.2484 14 13.92 13.3284 13.92 12.5C13.92 11.6716 13.2484 11 12.42 11Z" fill="#4F55F1" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_0_49">
              <rect width="24" height="24" fill="white" transform="translate(0.419983 0.5)" />
            </clipPath>
            <clipPath id="clip1_0_49">
              <rect width="24" height="24" fill="white" transform="translate(0.419983 0.5)" />
            </clipPath>
          </defs>
        </svg>

      </span>
      <span className="text">Discover</span>
    </button>
  );
};

export default DiscoverButton;
