/**
 * @file reducers/index.js
 *  Combine all reducers in this file and export the combined reducers.
 *  If we were to do this in store.js, reducers wouldn't be hot reloadable.
 * @author maoquan(maoquan@htsc.com)
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from './global';
import productHome from '../views/product/HomeRedux';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
* Merge route into the global application state
*
* @return {Object}
*/
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
* Creates the main reducer with the asynchronously loaded ones
*/
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    productHome,
    ...asyncReducers,
  });
}
