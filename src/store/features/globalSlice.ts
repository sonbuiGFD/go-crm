import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GlobalState = {
  isAuthened: boolean;
  sidebarCompact: boolean;
  hideSidebar: boolean;
};

const initialState = {
  isAuthened: false,
  sidebarCompact: false,
  hideSidebar: true,
} as GlobalState;

export const counter = createSlice({
  name: 'global',
  initialState,
  reducers: {
    reset: () => initialState,
    updateAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthened = action.payload;
    },
    updateSidebarCompact: (state, action: PayloadAction<any>) => {
      state.sidebarCompact = action.payload;
    },
    updateHideSidebar: (state, action: PayloadAction<any>) => {
      state.hideSidebar = action.payload;
    },
  },
});

export const { reset, updateAuth, updateSidebarCompact, updateHideSidebar } = counter.actions;
export default counter.reducer;
