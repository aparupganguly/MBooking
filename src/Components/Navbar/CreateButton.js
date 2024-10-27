import React from "react";
const CreateButton = () => {
  return (
    <button className='favorites-button'>
      <span className='icon'>
        <svg
          width='25'
          height='25'
          viewBox='0 0 25 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_0_41)'>
            <g clip-path='url(#clip1_0_41)'>
              <path
                d='M22.0482 12.5C22.0482 7.07757 17.6524 2.68182 12.23 2.68182C6.80755 2.68182 2.4118 7.07757 2.4118 12.5C2.4118 17.9224 6.80755 22.3182 12.23 22.3182C17.6524 22.3182 22.0482 17.9224 22.0482 12.5Z'
                fill='#4F55F1'
              />
              <path
                d='M12.23 16.5909V8.40909'
                stroke='white'
                stroke-width='1.63636'
                stroke-linecap='round'
              />
              <path
                d='M8.13907 12.5H16.3209'
                stroke='white'
                stroke-width='1.63636'
                stroke-linecap='round'
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
      <span className='text'>Create</span>
    </button>
  );
};

export default CreateButton;
