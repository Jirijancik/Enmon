import React from 'react';


export const ErrorPage: React.FC = () => {

  return (
    <>
      <h1 style={{color: "#ff69b4"}}>Oh damn, something broke</h1>
      <p>Well this is akward, did you try to turn off and on the computer? </p>
    </>
  );
};

ErrorPage.displayName = 'ErrorPage';
