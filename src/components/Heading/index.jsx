import React from 'react';

function Heading({
  mainHeading = '',
  subHeading = '',
  miniHeading = '',
  miniClassName = '',
}) {
  return (
    <>
      <div className='font-merriweather font-bold text-4xl px-4 flex flex-col gap-1'>
        <span className='leading-10'>{mainHeading}</span>
        <span>{subHeading}</span>
      </div>
      <div className='mt-8 ml-4'>
        <p className={`font-merriweather font-light ${miniClassName}`}>
          {miniHeading}
        </p>
      </div>
    </>
  );
}
export default Heading;
