import React from 'react';

function Button({ className = '', buttonText, btnType }) {
  return (
    <button
      className={`bg-w-gray-dark w-1/2 text-white p-4 rounded-md uppercase ${className}`}
      type={btnType}
    >
      {buttonText}
    </button>
  );
}

export default Button;
