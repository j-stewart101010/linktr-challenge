import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../Panel';
import { SubLinkListList, SubLinkListItem } from './';

import styles from './subLinkList.module.css';

export const SubLinkList = ({
  list,
}) => {
  return (
    <Panel variant={['primary', 'md']}>
      <SubLinkListList>
        <>
          { list.map(item => (
            <SubLinkListItem key={ item.id } item={ item } />
          ))}
        </>
      </SubLinkListList>
    </Panel>
  );
};

// @TODO: In a real app, it may be better to use something like TypeScript for typing but for demonstration purposes PropTypes are fine.
SubLinkList.propTypes = {
  list: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default SubLinkList;
