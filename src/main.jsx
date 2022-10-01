import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <Router>
      <GlobalStyles />
      <App />
    </Router>
);
