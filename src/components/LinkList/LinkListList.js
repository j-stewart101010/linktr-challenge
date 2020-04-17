import React from 'react';
import PropTypes from 'prop-types';

import { LinkListItem } from './';

import styles from './linkList.module.css';

export const LinkListList = ({
  children,
}) => (
  // Could use a more generic List component here to output uls
  <ul className={ styles.list }>
    { children }
  </ul>
);

// @TODO: In a real app, it may be better to use something like TypeScript for typing but for demonstration purposes PropTypes are fine.
LinkListList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

export default LinkListList;
