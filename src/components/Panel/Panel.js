import React from 'react';
import PropTypes from 'prop-types';

import styles from './panel.module.css';

export const Panel = ({
  id,
  children,
  variant = '',
}) => {
  const variantsClasses = Array.isArray(variant) ? variant.map(item => styles[item]).join(' ') : styles[variant];
  return (
    <div
      data-testid={ id }
      className={ `${styles.panel} ${variantsClasses}` }
    >
      { children }
    </div>
  );
};

Panel.propTypes = {
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

export default Panel;
