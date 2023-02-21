import { useState } from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import { ColorList } from './ColorList';

export function Addcolor() {
  const [color, setcolor] = useState('green');
  const [list, setlist] = useState(['red', 'black', 'purple']);
  const style = {
    fontSize: '29px',
    backgroundColor: color
  };
  return (
    <div>
      <input id='color-style' type="text" value={color} style={style} onChange={(e) => setcolor(e.target.value)} />
      <Button variant="contained" onClick={() => setlist([...list, color
      ])} id='btn'>Addcolor</Button>
      {list.map((list, index) => (
        <ColorList color={list} key={index} />
      ))}
    </div>
  );
}
