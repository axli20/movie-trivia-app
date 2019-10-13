import { ActionTypes } from '../actions';

const AuthReducer = (state = {
  authenticated: false, user: null,
}, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return Object.assign({}, state, {
        authenticated: true, user: action.payload.user,
      });
    case ActionTypes.DEAUTH_USER:
      return Object.assign({}, state, {
        authenticated: false, user: null,
      });
    case ActionTypes.AUTH_ERROR:
      return Object.assign({}, state, {
        authenticated: false, user: null,
      });
    default:
      return state;
  }
};

export default AuthReducer;
