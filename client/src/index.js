import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'src/serviceWorker';
import App from 'src/App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
