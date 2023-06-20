import { createSlice } from '@reduxjs/toolkit';

const storeDialogueSlice = createSlice({
  name: 'storeDialogue',
  initialState: false,
  reducers: {
    openStoreDialogue: (state) => {
      return true;
    },
    closeStoreDialogue: (state) => {
      return false;
    },
  },
});

export const { openStoreDialogue, closeStoreDialogue } = storeDialogueSlice.actions;

export default storeDialogueSlice.reducer;
