import { FETCH_WEATHER } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
  case FETCH_WEATHER:
  // returning a NEW state
    // return state.concat([action.payload.data]);
    return [action.payload.data, ...state];
  }
  return state;
}
