import { enableES5 } from 'immer';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'src/serviceWorker';
import App from 'src/App';

enableES5();


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
