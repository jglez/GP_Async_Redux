import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // we need applyMiddleware as a way to apply redux-logger to our store
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import Title from './components/Title';
import FriendsList from './components/FriendsList';
import './styles.css';

// Redux-logger is a type of Middleware that focuses on making console.logs more manageable
// and useful by logging the action performed, the state before the action, and the state after
import logger from 'redux-logger'

// We use applyMiddleware inside the creation of our store and pass in the redux-logger
const store = createStore(rootReducer, applyMiddleware(logger));

function App() {
  return (
    <div className="App">
      <Title />
      <FriendsList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  // Gives us access to Redux tools
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
