import React from 'react';

const Button = ({ text, bgColor, textColor, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} font-lato font-medium text-base ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;