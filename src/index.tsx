import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Rendering a Functional Component
const FunctionalComponent = () => {
  return (
    <div>
    1- I am a stateless React TypeScript functional component</div>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <FunctionalComponent />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
