import React from 'react';
import './style.css';
import ParentComponent from './components/ParentComponent';

export default function App() {
  return (
    <div className="app">
      <h1>-----Method as Props-----</h1>
      <ParentComponent />
    </div>
  );
}
