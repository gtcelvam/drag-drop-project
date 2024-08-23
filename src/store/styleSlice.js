import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: "absolute",
  left: 100,
  top:100,
  rotate: 0,
  transition: 0.4,
  showHello: false,
  showHmm: false,
  width:100,
  isCatVisible:true
};

export const styleSlice = createSlice({
  name: "style-slice",
  initialState: initialState,
  reducers: {
    handleLeftIncrease: (state, action) => {
      state.left = state.left + action.payload;
    },
    handleLeftDecrease: (state, action) => {
      state.left= state.left - action.payload;
    },
    handleRotateRight: (state, action) => {
      state.rotate= state.rotate + action.payload;
    },
    handleRotateLeft: (state, action) => {
      state.rotate= state.rotate - action.payload;
    },
    handleGotoXandY: (state,action)=>{
      state.left = state.left + action.payload.x;
      state.top = state.top + action.payload.y;
    },
    handleRandomWithGlide:(state,action)=>{
      state.left = state.left + action.payload.x;
      state.top = state.top + action.payload.y;
      state.transition = action.payload.glide;
    },
    handleSetXValue:(state,action)=>{
      state.left = action.payload
    },
    handleSetYValue:(state,action)=>{
      state.top = action.payload
    },
    handleTopIncrease: (state,action)=>{
      state.top = state.top + action.payload
    },
    resetTransition:(state)=>{
      state.transition = 0.4;
    },
    handleSayHello: (state,action)=>{
      state.showHmm = false;
      state.showHello = action.payload || !state.showHello
    },
    handleSayHmm: (state,action)=>{
      state.showHello = false;
      state.showHmm = action.payload || !state.showHmm
    },
    handleVisibility:(state,action)=>{
      state.isCatVisible = action.payload
    }
  },
});

export const { handleLeftIncrease,handleLeftDecrease,handleRotateRight,handleRotateLeft,handleGotoXandY,handleRandomWithGlide,resetTransition,handleSetXValue,handleSetYValue,handleTopIncrease,handleSayHello,handleSayHmm,handleVisibility } = styleSlice.actions;

export default styleSlice.reducer;
