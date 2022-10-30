import React from 'react';
import IconsSVG from '../sprites/sprites.svg';

export function Icons({name, color, size, className}) {

  return(
    <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

