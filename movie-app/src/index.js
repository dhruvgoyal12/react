import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'

// function logger(obj, next, action)
// logger(obj)(next)(action)
const logger = function({dispatch, getState}){
  return function(next){
    return function(action){
      //middleware
      console.log('ACTION_TYPE= ', action.type);
      //app will be stuck if next not called
      next(action);
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(logger));
//console.log('store', store);


// // Takes action object
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })
// console.log('After STATE', store.getState());
ReactDOM.render(  
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

