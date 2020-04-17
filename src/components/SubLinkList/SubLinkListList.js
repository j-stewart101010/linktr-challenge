import React from 'react';
import PropTypes from 'prop-types';

import styles from './subLinkList.module.css';

export const SubLinkListList = ({
  children,
  component = 'ul',
}) => {
  const Component = (component);
  return (
    <Component className={ styles.list }>
      { children }
    </Component>
  );
};

SubLinkListList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

export default SubLinkListList;
