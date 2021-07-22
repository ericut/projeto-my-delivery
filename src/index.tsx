import * as React from 'react';
import ReactDOM from 'react-dom';
// chakra
import { ColorModeScript } from '@chakra-ui/react';
// app
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
