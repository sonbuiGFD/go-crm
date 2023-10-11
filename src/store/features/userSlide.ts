import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  openModal: boolean;
  modalUser: Record<string, any>;
};

const initialState = {
  openModal: false,
  modalUser: {},
} as UserState;

export const slide = createSlice({
  name: 'global',
  initialState,
  reducers: {
    reset: () => initialState,
    updateOpenModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    updateModalUser: (state, action: PayloadAction<any>) => {
      state.modalUser = action.payload;
    },
  },
});

export const { reset, updateOpenModal, updateModalUser } = slide.actions;
export default slide.reducer;
