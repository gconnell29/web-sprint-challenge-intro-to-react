// Write your Character component here

import React from 'react';

const Character = (props) => {
  const { chars, char } = props;
  console.log(chars);

  return (
    <div className='character_info'>
      <h1>{char.name}</h1>
    </div>
  );
}

export default Character;