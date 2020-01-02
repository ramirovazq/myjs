import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as unique_source from './store'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const render = function () {
	ReactDOM.render(<App />, document.getElementById('root'));
}
render()
unique_source.store.subscribe(render)
registerServiceWorker();