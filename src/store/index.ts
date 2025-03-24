import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import * as reducers from '../reducer';

export const rootReducer = combineReducers({
    ...reducers,
  });

export const store = configureStore({
    reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunkAction<R = Promise<void>> = ThunkAction<R, AppState, undefined, Action<string>>;
