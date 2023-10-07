/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IDrawer {
  open: boolean;
  method?: "edit" | "add";
  component?: any;
  initialValues?:any;
  title: string;
  width?: number;
}

const initialState: IDrawer = {
  open: false,
  title: "",
};

export const drawSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setClose: (state) => {
      state.open = false;
    },
    setOpen: (state, actions: PayloadAction<IDrawer>) => {
      state.open = true;
      state.initialValues = actions.payload.initialValues;
      state.width = actions.payload.width;
      state.title = actions.payload.title;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.component = actions.payload.component;
    },
  },
});

export const { setClose, setOpen } = drawSlice.actions;

export const selectDraw = (state: RootState) => state.drawer;

export default drawSlice.reducer;
