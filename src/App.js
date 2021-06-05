import React from 'react';
import './style.css';
import ParentComponent from './components/ParentComponent';

export default function App() {
  return (
    <div className="app">
      <h1>-----Method as Props-----</h1>
      <ParentComponent />
      <div className="footer">
        <a
          href="https://www.geeksforgeeks.org/reactjs-methods-as-props/"
          target="_blank"
        >
          Source: ReactJS | Methods as Props{' '}
        </a>
      </div>
    </div>
  );
}
