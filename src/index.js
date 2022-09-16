import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  
  // <Auth0Provider
  //   domain="dev-m3e20d8c.eu.auth0.com"
  //   clientId="7CSx7AdZc8rcrkWaVHcOviKWI5Z0p5cL"
  //   redirectUri={'https://www.google.com/'}
  //   // redirectUri={window.location.origin}
  // >
  //   <App />
  // </Auth0Provider>,

  <App/>,
  document.getElementById('root')
);
