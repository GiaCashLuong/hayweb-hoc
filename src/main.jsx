import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { initAnalytics, installScrollDepthTracker, installExternalLinkTracker } from './lib/analytics.js';

initAnalytics();
installScrollDepthTracker();
installExternalLinkTracker('site2_blog');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
