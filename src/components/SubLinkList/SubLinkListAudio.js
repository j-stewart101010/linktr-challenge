import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';
import AudioPlayer from '../AudioPlayer';
import { SubLinkListList, SubLinkListItem } from '.';

import styles from './subLinkList.module.css';

export const SubLinkListAudio = ({
  list,
}) => {
  const [activeAudio, setActiveAudio] = useState(list.items[0]);
  const handlePlay = (item) => () => {
    // @TODO: This is where we would handle logic for updating state to the selected track and
    // passing to the player so it can begin
    setActiveAudio(item);
  };
  return (
    <>
      <AudioPlayer audio={ activeAudio } />
      <SubLinkListList component="dl">
        <>
          { list.items.map(item => (
            <div key={ item.id } className={ styles.line }>
              {/* @TODO: Could be another seperate component */}
              <dt className={ styles.itemIcon }>
                <Link link={ item.link }> 
                  <svg width="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-140.609375 0-256 115.390625-256 256s115.390625 256 256 256 256-115.390625 256-256-115.390625-256-256-256zm94.773438 380.773438c-68.085938-29.542969-142.6875-38.230469-215.800782-25.195313l-5.273437-29.527344c78.882812-14.121093 159.492187-4.691406 233.027343 27.214844zm45.339843-78.308594c-88.859375-40.867188-190.59375-52.835938-286.40625-33.707032l-6.519531-29.296874.761719-.144532c101.9375-20.304687 210.144531-7.574218 304.703125 35.902344zm25.546875-87.113282c-98.671875-42.480468-211.304687-55.738281-317.402344-37.132812l-5.1875-29.5625c111.695313-19.570312 230.449219-5.640625 334.453126 39.15625zm0 0"/></svg>
                </Link>
              </dt>
              <SubLinkListItem onClick={ handlePlay(item) } key={ item.id } item={ listItemProps(item) } component="dd" />
            </div>
          ))}
        </>
      </SubLinkListList>
    </>    
  );
};

// @TODO: In a real app, it may be better to use something like TypeScript for typing but for demonstration purposes PropTypes are fine.
SubLinkListAudio.propTypes = {
  list: PropTypes.object,
};

export default SubLinkListAudio;
