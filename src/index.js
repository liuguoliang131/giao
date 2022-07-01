/*
 * @Date: 2022-06-30 14:13:48
 * @LastEditors: 刘国亮
 * @LastEditTime: 2022-07-01 17:21:38
 * @FilePath: \react-project\src\index.js
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import utils from './utils/index'
React.$utils = utils
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
