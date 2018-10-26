import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/app/App';

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from "react-redux";
import { authenticate }  from './JS/reducers/authenticate';
import Reducer from './JS/reducers';

const store = createStore(Reducer);

ReactDOM.render(
	<Provider store={store} >
		<App/>
	</Provider>
	, document.getElementById('root'));
