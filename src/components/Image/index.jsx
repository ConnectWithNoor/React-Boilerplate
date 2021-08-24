import React from 'react';

function Image({ src, className = '', alt = 'alt', href }) {
  return (
    <a href={href}>
      <img src={src} className={`object-cover ${className}`} alt={alt} />
    </a>
  );
}

export default Image;
