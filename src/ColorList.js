import React from 'react';

export function ColorList({ color }) {
  const style = {
    width: '200px', height: '12px', backgroundColor: color, marginTop: '10px'
  };
  return (
    <div style={style} id='list-style'></div>
  );
}
