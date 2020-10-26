import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import configureStore from './store/configureStore.js'
import HomePage from './components/HomePage.js';
import Routing from './components/LoginPage.js'
import Login from './components/loginComp/login.jsx'

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <HomePage/>
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));

