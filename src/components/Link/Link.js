import React from 'react';
import PropTypes from 'prop-types';

import styles from './link.module.css';

export const Link = ({
  id,
  children,
  link,
  onClick = () => {},
}) => {
  return (
    <a
      data-testid={ id }
      href={ link }
      className={ styles.link }
      onClick={ onClick }
    >
      { children }
    </a>
  );
};

Link.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  link: PropTypes.string,
  onClick: PropTypes.func,
};

export default Link;
