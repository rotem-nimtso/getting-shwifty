
import * as React from 'react';

export interface IBoardProps {
    tiles : React.ReactNode[]
}

export default function Board ({tiles} : IBoardProps) {
  return (
    <div className='board'>
      {tiles.map(tile => <>{tile}</>)}
    </div>
  );
}
