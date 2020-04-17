import React from 'react';
import PropTypes from 'prop-types';

import styles from './typography.module.css';

const Typography = ({
  children,
  component = 'span',
  className = '',
  variant = 'body1',
}) => {
  const Component = (component);
  return (
    <Component className={ `${className} ${styles[variant]}` }>{ children }</Component>
  );
};

Typography.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default Typography;
