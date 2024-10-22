import React from 'react';
import Expertise from './Expertise';
import MadeIn from './MadeIn';
import Ecosystem from './Ecosystem';

function Nav() {
  return (
    <div data-testid="nav" className='flex items-center justify-between max-w-[912px] w-full'>
      <div className="flex items-center gap-3 hidden xl:flex">
        <Expertise />
        <MadeIn />
      </div>
      <Ecosystem />

    </div>
  );
}

export default Nav;