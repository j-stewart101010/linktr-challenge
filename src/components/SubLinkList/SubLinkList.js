import React from 'react';
import PropTypes from 'prop-types';

import { types } from '../../config';

import Panel from '../Panel';
import {
  SubLinkListAudio,
  SubLinkListList,
  SubLinkListItem,
} from './';

export const SubLinkList = ({
  list,
}) => {  
  // @TODO: This could be moved into it's own component file for testing purposes
  const SubLinkListDefault = ({ items }) => (
    <SubLinkListList>
      <>
        { items.items.map(item => (
          <SubLinkListItem key={ item.id } item={ item } />
        ))}
      </>
    </SubLinkListList>
  );

  const mapListTypes = (items) => {
    switch (items.type) {
      case types.AUDIO_PLAYER:
        return <SubLinkListAudio list={ items } />;
      default:
        return <SubLinkListDefault items={ items } />;
    };
  };
  return (
    <Panel variant={['primary', 'md']}>
      { mapListTypes(list) }
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
