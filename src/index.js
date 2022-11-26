import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.css';

import 'jquery/dist/jquery.js';


axios.defaults.baseURL = 'http://localhost:3001/api';

    let userData =  JSON.parse(localStorage.getItem("userData"))
    let token
    if(userData){
        token= userData.token
    }
    

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.interceptors.request.use(request => {     


        return request;
    }, error => {

        return Promise.reject(error);
    });

    axios.interceptors.response.use(response => {

        return response;
    }, error => {
        console.log(error.response);
        return Promise.reject(error);
    });
    

    

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  
  document.getElementById('root')
);


serviceWorker.unregister();
