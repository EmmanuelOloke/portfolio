import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCode } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faCode} />
        <div>This will be the NavBar</div>
      </div>
    </>
  );
};

export default NavBar;
