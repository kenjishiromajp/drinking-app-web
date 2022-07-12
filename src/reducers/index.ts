import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameReducer';
import playerReducer from './playerReducer';

const store = configureStore({
  reducer: {
    players: playerReducer,
    game: gameReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
