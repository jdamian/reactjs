import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHelloWorld from './AppHelloWorld';
// import CounterApp from './CounterApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHelloWorld mensaje="Bienvenido a mi primera pagina en reactjs"/>
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <CounterApp value={10} />
//   </React.StrictMode>
// );

