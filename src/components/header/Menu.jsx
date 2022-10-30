import { Links } from './Links.jsx';
import { Navigation } from './Navigation.jsx';
import React from 'react';

export function Menu() {
  return (
    <div className='menu'>
      <Navigation />
      <Links />
    </div>
  );
}
