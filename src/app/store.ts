import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import forumReducer from '../features/forum/forumSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    forum: forumReducer,
  },
});
//console.log(20);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
