import React from 'react';

import LinksList from './LinksList';
import AddLink from './AddLink.js';
import PrivateHeader from './PrivateHeader.js';
import LinkListFilters from './LinkListFilters';

export default () => {
  return (
    <div>
      <PrivateHeader title="Short Lnk" />
      <div className="page-content">
        <LinkListFilters />
        <AddLink />
        <LinksList />
      </div>
    </div>
  );
};
