import React from 'react';

import { Logo } from './Logo.jsx';
import { Menu } from './Menu.jsx';

export function Header() {
  return (
    <div className='header'>
      <Logo />
      <Menu />
    </div>
  );
}
