import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import { createRequestActions } from '../../utils/createAction';
import { createRequestConstants } from '../../utils/createConstants';

/**
 * constants
 */
export const constants = createRequestConstants('GET_PRODUCT_LIST_');

/**
 * actions
 */
export const actions = createRequestActions(constants);

/**
 * reducers
 */
const INITIAL_STATE = fromJS({
  items: [],
});

const updateList = (state, action) => {
  const { response } = action;
  return state.update('items', list => list.concat(response.data));
};

const ACTION_HANDLERS = {
  [constants.SUCCESS]: updateList,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
