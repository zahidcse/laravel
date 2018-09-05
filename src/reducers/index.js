import { combineReducers } from 'redux';
import PostReducer from './post_reducer';
import { reducer as fromReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts:PostReducer,
  form:fromReducer
});

export default rootReducer;
