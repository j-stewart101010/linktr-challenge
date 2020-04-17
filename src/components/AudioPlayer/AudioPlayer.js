import React from 'react';
import PropTypes from 'prop-types';

import { theme } from '../../utils';

import { Typography } from '../Typography';

import styles from './audioPlayer.module.css';

export const AudioPlayer = ({
  audio,
}) => {
  const {
    player: {
      thumb,
      title,
      theme: siteTheme,
    }
  } = audio;
  return (
    <div className={ styles.audioPlayer }>
    <div className={ styles.panel }>
      <div className={ styles.thumb }>
        {/* TODO: Use a media component here */}
        <img src={ thumb } />
      </div>
      <div className={ styles.title }>
        <svg width="30px" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="PlayCircleFilled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>
        <Typography variant="body1" component="h4">{ title }</Typography>
      </div>
    </div>
    {/* @TODO: Theme should be passed down with redux or context API */}
    <div className={ styles.progressBar } style={ theme(siteTheme) }></div>
  </div>
  );
};

AudioPlayer.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default AudioPlayer;
