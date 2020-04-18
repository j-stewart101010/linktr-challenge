import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '../Typography';
import Link from '../Link';

import styles from './subLinkList.module.css';

export const SubLinkListItem = ({
  item,
  component = 'li',
  onClick = () => {},
}) => {
  const Component = (component);
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
        {/* @TODO: This would be a generic Icon component */}
        { link && (
          <svg width="20px" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="ChevronRight"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
        )}
      </span>
    </>
  );
  return (
    <Component onClick={ onClick } className={ styles.item }>
      {link ? (
        <Link className={ styles.link } link={ link }><Pane /></Link> 
      ) : (
        <Pane />
      )}
    </Component>
  );
};

// @TODO: In a real app, it may be better to use something like TypeScript for typing but for demonstration purposes PropTypes are fine.
// We would also shape objects so we know what's expected to be contained
SubLinkListItem.propTypes = {
  item: PropTypes.object,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
};

export default SubLinkListItem;
