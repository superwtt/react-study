import React from 'react';
import ReactDOM from 'react-dom';
import HOC from './HOC/withDraggable.js'

ReactDOM.render(
  <React.StrictMode>
    <HOC />
  </React.StrictMode>,
  document.getElementById('root')
);
