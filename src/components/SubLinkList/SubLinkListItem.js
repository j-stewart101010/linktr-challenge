import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '../Typography';
import Link from '../Link';

import styles from './subLinkList.module.css';

export const SubLinkListItem = ({
  item,
}) => {
  const {
    title,
    subtitle,
    link,
    note,
  } = item;
  const Pane = () => (
    <>
      <span className={ styles.panel }>
        { title && (
          <Typography variant="body1" component="h4">{ title }</Typography>
        )}
        { subtitle && (
          <Typography className={ styles.subtitle } variant="body2" component="h5">{ subtitle }</Typography>
        )}
      </span>
      <span className={ styles.panel }>
        { note && (
          <Typography variant="body2" component="span">{ note }</Typography>
        )}
        { link && (
          <svg width="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" title="ChevronRight"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
        )}
      </span>
    </>    
  );
  return (
    <li className={ styles.item }>
      {link ? (
        <Link className={ styles.link } link={ link }><Pane /></Link> 
      ) : (
        <Pane />
      )}
    </li>
  );
};

// @TODO: In a real app, it may be better to use something like TypeScript for typing but for demonstration purposes PropTypes are fine.
SubLinkListItem.propTypes = {
  item: PropTypes.object,
};

export default SubLinkListItem;
