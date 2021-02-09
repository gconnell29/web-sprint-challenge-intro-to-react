import React, { useEffect, useState } from "react";
import Character from './Character';

const Characters = (props) => {
  const { chars, query } = props;
  // console.log(chars);

  if (query.isSuccess === false) {
    return `currently loading`;
  } else {
    return (
      <section className='characters_section'>
        {chars.map(char => {
          return <Character chars={chars} char={char} />
        })}
      </section>
    );
  }
} // end of component

export default Characters;