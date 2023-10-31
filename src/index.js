import React from 'react';
import "./global.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import GherkinTable from "./components/GherkinTable";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

