import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProvider from "./utils/userContext"

ReactDOM.render(
  <Router>
      <UserProvider>
          <App />
      </UserProvider>
  </Router>,
  document.getElementById('root')
);
