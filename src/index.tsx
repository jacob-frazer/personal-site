import React from 'react';
import ReactDOM from 'react-dom/client';
// imported without the .css suffix, as this webpack version resolves the package's "./*" export to "<name>.css"
import '@fontsource/inter/400';
import '@fontsource/inter/400-italic';
import '@fontsource/inter/600';
import '@fontsource/inter/700';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
