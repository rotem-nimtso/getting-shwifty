import * as React from 'react';

export interface ITileProps {
    content : React.ReactNode
}

export default function Tile ({content}: ITileProps) {
  return (
    <div className='tile'>
      {content}
    </div>
  );
}
