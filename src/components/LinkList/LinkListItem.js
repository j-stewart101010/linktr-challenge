import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { theme } from '../../utils';

import { Typography } from '../Typography';
import Link from '../Link';

import styles from './linkList.module.css';

export const LinkListItem = ({
  item,
}) => {
  const [activePanel, setActivePanel] = useState(false);
  const handleActivePanel = () => setActivePanel(!activePanel);
  return (
    <li className={ styles.linkListItem }>
      { item.link && (
        <div className={ styles.linkListItemButton } style={ theme(item.theme) }>
          <Link link={ item.link }>
            <Typography variant="body2" component="span">{ item.text }</Typography>
          </Link>
        </div>
      )}
    </li>
  );
};

// @TODO: In a real app, it may be better to use something like TypeScript for typing but for demonstration purposes PropTypes are fine.
LinkListItem.propTypes = {
  item: PropTypes.object,
};

export default LinkListItem;
