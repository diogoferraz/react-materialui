import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import MenuAppBar from './components/menu-app-bar/menu-app-bar';

ReactDOM.render(<MenuAppBar />, document.querySelector('#menu'));
ReactDOM.render(<Index />, document.querySelector('#root'));
