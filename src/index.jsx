import './styles/index.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';
import { Provider } from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './module/store'


WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
})

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
