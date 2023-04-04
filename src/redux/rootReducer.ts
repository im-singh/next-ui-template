import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './DataSlice/dataSlice';

const rootReducer = combineReducers({
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
