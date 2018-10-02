import React from 'react';
import ReactDom from 'react-dom';
import Hello from './hello';

document.addEventListener('DOMContentLoaded',() => {
  const names = ['carlos', 'jose', 'rebeca']
  ReactDom.render(
    <div>
      <Hello names={names}/>
    </div>,
    document.getElementById('app')
  );
});