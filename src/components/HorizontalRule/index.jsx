import React from 'react';

function HorizontalRule({ className = '' }) {
  return <hr className={`mt-2 h-0.5 bg-black ${className}`} />;
}

export default HorizontalRule;
