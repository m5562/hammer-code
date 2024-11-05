import { createSlice } from "@reduxjs/toolkit";
// const itemClickedRef = useRef(() => {});

export const AdderSlice = createSlice({
  name: "Adder",
  initialState: {
    isShowing: false,
    keyString: "",
    availableOptions: [],
    selectedOptions: [],
    onItemClicked: {
      click: () => {},
    },
  },
  reducers: {
    setAvailableOptions: (state, action) => {
      state.availableOptions = action.payload;
    },
    setKeyString: (state, action) => {
      state.keyString = action.payload;
    },
    chooseItem: (state, action) => {
      state.selectedOptions = [...state.selectedOptions, action.payload];
    },
    openAdder: (state) => {
      state.isShowing = true;
    },
    closeAdder: (state) => {
      state.isShowing = false;
      state.availableOptions = [];
      state.keyString = "";
    },
    onItemClick: (state, action) => {
      state.onItemClicked = action.payload;
    },
  },
});

export const {
  chooseItem,
  closeAdder,
  openAdder,
  setAvailableOptions,
  setKeyString,
  onItemClick,
} = AdderSlice.actions;
export const adderReducer = AdderSlice.reducer;
