import { combineReducers } from "redux";
import weatherReducer from './weatherReducer';

const reducers = combineReducers({
  weather: weatherReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;