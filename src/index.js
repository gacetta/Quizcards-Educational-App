import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import './styles.css';

console.log('serving /src/index.js - entry file for webpack')

render(<App />, document.querySelector('#root'));