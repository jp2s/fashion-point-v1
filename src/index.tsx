import React from 'react';
import ReactDOM from 'react-dom/client';

import './stylish/general.css'
import './stylish/flexbox.css'
import './stylish/typography.css'
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
