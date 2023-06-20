import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './reducers/catalog/productSlice';
import categoryReducer from './reducers/catalog/categorySlice';
import storeDialogueReducer from './reducers/storeDialogue/storeDialogueSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    storeDialogue: storeDialogueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
