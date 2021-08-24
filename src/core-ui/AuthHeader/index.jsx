import React from 'react';
import Heading from '../../components/Heading';
import HorizontalRule from '../../components/HorizontalRule';

function AuthHeader({ miniHeading, showMiniHeading }) {
  return (
    <>
      <Heading mainHeading={'Welcome'} subHeading={'to the BrainTornado!'} />
      {showMiniHeading && (
        <>
          <Heading miniHeading={miniHeading} />
          <HorizontalRule />
        </>
      )}
    </>
  );
}

export default AuthHeader;
