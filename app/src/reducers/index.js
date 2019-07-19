import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import StressReducer from './stressReducer';

export default combineReducers({
  stress: StressReducer,
  form: formReducer,
});
