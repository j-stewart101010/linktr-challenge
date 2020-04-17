import React from 'react';
import PropTypes from 'prop-types';

import styles from './subLinkList.module.css';

export const SubLinkListList = ({
  children,
}) => (
  <ul className={ styles.list }>
    { children }
</ul>
);

SubLinkListList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

export default SubLinkListList;
