import React from 'react';
import PropTypes from 'prop-types';

// @TODO: In a real app it would be preferable to use the . subcomponent naming convention (LinkList.List instead of LinkListList)
import { LinkListList, LinkListItem } from './';

import styles from './linkList.module.css';

export const LinkList = ({
  list,
}) => (
  <div className={ styles.linkList }>
    <LinkListList>
      <>
        { list.map(item => (
          <LinkListItem key={ item.id } item={ item } />
        ))}
      </>
    </LinkListList>
  </div>
);

// @TODO: In a real app, it may be better to use something like TypeScript for typing but for demonstration purposes PropTypes are fine.
LinkList.propTypes = {
  list: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default LinkList;
