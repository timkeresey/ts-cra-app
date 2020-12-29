import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Rendering a Functional Component
const FunctionalComponent = () => <div>1) I am a stateless React TypeScript functional component</div>;

// Rendering Functional components with props
interface Props {
    name: string,
}
const FunctionalComponentWithProps: React.FC<Props> = (props) => {
    return <div>{props.name}</div>;
}

ReactDOM.render(
  <React.StrictMode>
    <FunctionalComponent />
    <FunctionalComponentWithProps name={'2) I am a React TypeScript functional component with props'} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
