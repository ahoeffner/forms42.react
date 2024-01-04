import './index.css';
import './styles.css';
import './fieldset.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormsModule } from './futureforms/FormsModule';

new FormsModule();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);