
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import HelloComponent from './HelloComponent.jsx';
import Login from './login/login.jsx';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

import BlogPost from "./container/BlogPost/BlogPost";



ReactDOM.render(
  <BlogPost/>,document.getElementById('content')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();