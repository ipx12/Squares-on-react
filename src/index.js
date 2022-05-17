import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Square from './Square';

const initialWidth = 4;
const initialHeight = 4;
const cellSize = 50;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Square initialWidth={initialWidth} initialHeight={initialHeight} cellSize={cellSize}/>
  </>
);

