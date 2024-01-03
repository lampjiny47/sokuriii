import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter03/Library';
import Clock from './chapter04/Clock';
import Form from './components/ui-guide/Form'

// const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval( () => {
  ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <Library />
      <Clock />
      <Form />
    </React.StrictMode>,
    document.getElementById('root')
  );
},1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
