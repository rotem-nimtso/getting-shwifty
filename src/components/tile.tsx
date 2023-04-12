import * as React from 'react';

export interface ITileProps {
    content : React.ReactNode
    isHidden? : boolean
}

export default function Tile ({content, isHidden}: ITileProps) {
  return (
    <button className={isHidden? 'hidden-tile' : 'tile'}>
      {content}
    </button>
  );
}
