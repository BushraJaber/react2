import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');  
const root = createRoot(rootElement);  

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
