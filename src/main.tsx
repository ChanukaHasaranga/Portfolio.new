import { createRoot } from 'react-dom/client';
import React from 'react'; // Explicit import for safety
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);