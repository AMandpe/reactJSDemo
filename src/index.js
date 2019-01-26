import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import rootReducer from './reducer/roootReducer'
// import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
const store = createStore(rootReducer)

ReactDOM.render(<provider store={store}><App /></provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
registerServiceWorker()
