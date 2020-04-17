import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { theme } from '../../utils';

import { Typography } from '../Typography';
import { SubLinkList } from '../SubLinkList';
import Link from '../Link';

import styles from './linkList.module.css';

export const LinkListItem = ({
  item,
}) => {
  const [activePanel, setActivePanel] = useState(false);
  const handleActivePanel = () => setActivePanel(!activePanel);
  return (
    <li className={ styles.item }>
      {/* @TODO: More logic here for what to do if link is not defined (possibly render a version without a link) */}
      { item.link && (
        <div className={ styles.button } style={ theme(item.theme) }>
          <Link link={ item.link }>
            <Typography variant="body1" component="span">{ item.text }</Typography>
          </Link>
        </div>
      )}
      { item.list && (
        <>
          <div className={ styles.button } onClick={ handleActivePanel } style={ theme(item.theme) }>
            <Typography variant="body1" component="span">{ item.text }</Typography>
          </div>
          { activePanel && <SubLinkList list={ item.list } /> }
        </>
      )}
    </li>
  );
};

// @TODO: In a real app, it may be better to use something like TypeScript for typing but for demonstration purposes PropTypes are fine.
LinkListItem.propTypes = {
  item: PropTypes.object,
};

export default LinkListItem;
