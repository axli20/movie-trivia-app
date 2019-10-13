import { combineReducers } from 'redux';

import GameReducer from './gameReducer';
import AuthReducer from './authReducer';

const rootReducer = combineReducers({
  game: GameReducer,
  auth: AuthReducer,
});

export default rootReducer;
